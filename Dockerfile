# Build the React app on Node 20, then serve the static build with nginx.
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci
COPY public ./public
COPY src ./src
# Demo mode: the in-browser mock API, so the container needs no network or keys.
ENV REACT_APP_USE_MOCK=true
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
