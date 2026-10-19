// In-browser mock of the swinhub API, used when REACT_APP_USE_MOCK=true.
// Every handler returns the same envelope the real API does:
// { status: true, data, message } on success, { status: false, message } on failure.
import seed, { CURRENT_USER_ID, SEED_NOW } from "./seed";

const STORAGE_KEY = "swin_mock_db";
// Bump when seed.js changes so browsers drop their saved copy.
const SEED_VERSION = 2;
const LATENCY_MS = 250;
// Opening any page with ?reset-demo in the URL restores the seed data.
const RESET_PARAM = "reset-demo";

const clone = (value) => JSON.parse(JSON.stringify(value));

const fresh = () => ({ db: clone(seed), seq: 0 });

const shouldReset = () => {
  try {
    return new URLSearchParams(window.location.search).has(RESET_PARAM);
  } catch (e) {
    return false;
  }
};

const loadState = () => {
  if (shouldReset()) return fresh();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && saved.version === SEED_VERSION) {
      return { db: saved.db, seq: saved.seq || 0 };
    }
  } catch (e) {
    // fall through to a fresh copy of the seed
  }
  return fresh();
};

let { db, seq } = loadState();

const persist = () => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: SEED_VERSION, db, seq })
    );
  } catch (e) {
    // quota exceeded or storage blocked: keep working in memory
  }
};

if (shouldReset()) persist();

export const resetMockDb = () => {
  ({ db, seq } = fresh());
  persist();
};

const ok = (data, message = "Successful", extra = {}) => ({
  status: true,
  message,
  data,
  ...extra,
});
const fail = (message) => ({ status: false, message, data: { message } });

const nextId = (list) =>
  list.reduce((max, item) => Math.max(max, Number(item.id) || 0), 0) + 1;

// Ids and timestamps come from one persisted counter instead of
// Math.random/Date.now, so the same clicks always produce the same data.
const nextSeq = () => ++seq;

const uuid = () =>
  `00000000-0000-4000-8000-${String(nextSeq()).padStart(12, "0")}`;

// One minute after SEED_NOW per write.
const now = () => new Date(SEED_NOW + nextSeq() * 60 * 1000).toISOString();

const findUser = (id) => db.users.find((u) => u.id === Number(id));
const findProduct = (id) => db.products.find((p) => p.id === id);

const withProduct = (review) => ({
  ...review,
  product: findProduct(review.product_id) || null,
});

const withReviewers = (review) => ({
  ...withProduct(review),
  review_stages: (review.review_stages || []).map((stage) => ({
    ...stage,
    reviewers: stage.reviewers.map((r) => ({
      ...r,
      user: findUser(r.user_id) || { first_name: "Unknown", last_name: "" },
    })),
  })),
});

const matchesQuery = (product, text) => {
  const q = String(text || "").toLowerCase();
  return (
    product.name.toLowerCase().includes(q) ||
    product.category.toLowerCase().includes(q)
  );
};

// Uploads become data URLs so they survive a reload; large files fall back
// to object URLs, which only last for the current session.
const fileToUrl = (file) =>
  new Promise((resolve) => {
    if (!file || typeof file === "string") return resolve(file || "");
    if (file.size > 1024 * 1024) return resolve(URL.createObjectURL(file));
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(URL.createObjectURL(file));
    reader.readAsDataURL(file);
  });

// [method, pattern, handler(params, body)]. Patterns use :name segments.
const routes = [
  // Auth
  ["post", "login", (_, body = {}) => {
    if (!body.email || !body.password) return fail("Email and password are required");
    const email = String(body.email).trim().toLowerCase();
    const user = db.users.find((u) => String(u.email).toLowerCase() === email);
    if (!user || db.passwords[email] !== body.password) {
      return fail("Invalid email or password");
    }
    return ok(user, "Login successful", { token: `mock-token-${user.id}` });
  }],
  ["post", "registration", (_, body) => {
    const email = String(body.email || "").trim().toLowerCase();
    if (!email || !body.password) return fail("Email and password are required");
    if (db.users.some((u) => String(u.email).toLowerCase() === email)) {
      return fail("An account with this email already exists");
    }
    const user = {
      id: nextId(db.users),
      first_name: body.first_name || "",
      last_name: body.last_name || "",
      email,
      phone_number: body.phone_number || "",
      company: body.company || "",
      address: body.address || "",
      user_type: body.user_type || "user",
      status: "active",
      created_at: now(),
    };
    db.users.push(user);
    db.passwords[email] = body.password;
    return ok(user, "Registration successful", { token: `mock-token-${user.id}` });
  }],

  // Guest (public) endpoints
  ["get", "guest/products", () => ok(db.products)],
  ["get", "guest/product/:id", ({ id }) => {
    const product = findProduct(id);
    return product ? ok(product) : fail("Product not found");
  }],
  ["post", "guest/search", (_, body = {}) =>
    ok(db.products.filter((p) => matchesQuery(p, body.name || body.category)))],
  ["post", "guest/contact", (_, body) => {
    db.contacts.push({ ...body, created_at: now() });
    return ok(body, "Thank you, we will be in touch shortly");
  }],

  // Products
  ["get", "products", () =>
    ok(db.products.filter((p) => p.user_id === CURRENT_USER_ID))],
  ["get", "products/:id", ({ id }) => {
    const product = findProduct(id);
    return product ? ok(product) : fail("Product not found");
  }],
  ["post", "products", (_, body) => {
    const product = {
      id: uuid(),
      name: body.name || "Untitled product",
      category: (body.category && body.category.value) || body.category || "",
      logo: body.logo || "",
      description: body.description || "",
      tech_description: body.tech_description || "",
      user_id: CURRENT_USER_ID,
      created_at: now(),
      assets: [],
      specifications: [],
      file_categories: [],
    };
    db.products.push(product);
    return ok(product, "Product created");
  }],
  ["post", "products/:id/review", ({ id }, body) => {
    const product = findProduct(id);
    if (!product) return fail("Product not found");
    db.reviews.forEach((review) => {
      if (review.product_id !== id) return;
      review.review_stages.forEach((stage) =>
        stage.reviewers.forEach((r) => {
          if (r.user_id === CURRENT_USER_ID && r.review === null) {
            r.review = body.review;
            r.ratings = body.rating;
            r.updated_at = now();
          }
        })
      );
    });
    return ok(body, "Evaluation submitted");
  }],
  ["post", "specifications", (_, body) => {
    const product = findProduct(body.product_id);
    if (!product) return fail("Create the product before adding specifications");
    product.specifications = (body.specifications || []).map((s) =>
      typeof s === "string" ? { name: s } : s
    );
    return ok(product, "Specifications saved");
  }],
  ["post", "assets", (_, body) => {
    const product = findProduct(body.product_id);
    if (!product) return fail("Product not found");
    const asset = { id: nextSeq(), ...body };
    product.assets.push(asset);
    return ok(asset, "Asset uploaded");
  }],

  // Digital collateral
  ["get", "files", (_, query = {}) =>
    ok(db.files.filter((f) =>
      (!query.product_id || f.product_id === query.product_id) &&
      (!query.category || f.category === query.category)))],
  ["post", "files", (_, body) => {
    const file = { id: nextId(db.files), created_at: now(), access: "open", ...body };
    db.files.push(file);
    const product = findProduct(body.product_id);
    if (product && !product.file_categories.some((c) => c.category === body.category)) {
      product.file_categories.push({ category: body.category });
    }
    return ok(file, "Digital collateral added");
  }],
  ["post", "files/request/:id", ({ id }) => {
    db.access_requests.push({ file_id: Number(id), user_id: CURRENT_USER_ID, created_at: now() });
    return ok({ file_id: Number(id) }, "Access requested");
  }],

  // Blog posts and comments
  ["get", "posts", (_, query = {}) =>
    ok(db.posts.filter((p) => !query.product_id || p.product_id === query.product_id))],
  ["get", "posts/:id", ({ id }) => {
    const post = db.posts.find((p) => p.id === Number(id));
    return post ? ok(post) : fail("Post not found");
  }],
  ["post", "posts", (_, body) => {
    const post = {
      id: nextId(db.posts),
      product_id: body.product_id,
      title: body.title,
      body: body.post,
      image: body.file,
      created_at: now(),
    };
    db.posts.push(post);
    return ok(post, "Blog post added");
  }],
  ["get", "comments", (_, query = {}) =>
    ok(db.comments.filter((c) => c.post_id === Number(query.post_id)))],
  ["post", "comments", (_, body) => {
    const comment = {
      id: nextId(db.comments),
      post_id: Number(body.post_id),
      user_id: CURRENT_USER_ID,
      comment: body.comment,
      created_at: now(),
    };
    db.comments.push(comment);
    return ok(comment, "Comment added");
  }],

  // Reviews (analysis)
  ["get", "reviews", () => ok(db.reviews.map(withProduct))],
  ["get", "reviews/start/:id", ({ id }) => {
    const review = db.reviews.find((r) => r.id === Number(id));
    if (!review) return fail("Review not found");
    review.started_at = now();
    return ok(withProduct(review), "Review process initiated");
  }],
  ["get", "reviews/:id", ({ id }) => {
    const review = db.reviews.find((r) => r.id === Number(id));
    return review ? ok(withReviewers(review)) : fail("Review not found");
  }],
  ["post", "reviews", (_, body) => {
    const review = {
      id: nextId(db.reviews),
      product_id: body.product_id,
      name: body.name,
      stages: Number(body.stages) || 1,
      created_at: now(),
      review_stages: [],
    };
    db.reviews.push(review);
    return ok(review, "Review created");
  }],
  ["post", "stages", (_, body) => {
    const review = db.reviews.find((r) => r.id === Number(body.review_id));
    if (!review) return fail("Review not found");
    review.review_stages = (body.stages || []).map((stage, index) => ({
      id: index + 1,
      name: stage.name,
      reviewers: (stage.reviewers || []).map((r) => ({
        id: nextSeq(),
        user_id: Number(r.user_id || r.id),
        review: null,
        ratings: null,
        updated_at: now(),
      })),
    }));
    return ok(review.review_stages, "Stages created");
  }],

  // Company, users and sales managers
  ["get", "users", () => ok(db.users)],
  ["post", "users", (_, body) => {
    const invites = Array.isArray(body) ? body : [body];
    const created = invites.map((invite) => {
      const [first = "", last = ""] = String(invite.email || "").split("@")[0].split(".");
      const user = {
        id: nextId(db.users),
        first_name: first,
        last_name: last,
        email: invite.email,
        phone_number: "",
        roles: invite.roles || [],
        status: "pending",
        created_at: now(),
      };
      db.users.push(user);
      return user;
    });
    return ok(created, "Invitation sent");
  }],
  ["post", "profile", (_, body) => {
    db.profile = { ...db.profile, ...body };
    Object.assign(findUser(CURRENT_USER_ID), body);
    return ok(db.profile, "Profile updated");
  }],
  ["get", "sales", () =>
    ok(db.sales.map((s) => ({ ...s, user_id: findUser(s.user_id) || { first_name: "Unknown", last_name: "", status: "" } })))],
  ["post", "sales/add", (_, body) => {
    const ids = [].concat(body.user_id || []);
    if (!ids.length) return fail("Select at least one user");
    const created = ids.map((id) => {
      const sale = {
        id: nextId(db.sales),
        user_id: Number((id && id.id) || id),
        country: (body.country && body.country.value) || body.country,
        region: (body.region && body.region.value) || body.region,
        created_at: now(),
      };
      db.sales.push(sale);
      return sale;
    });
    return ok(created, "Sales manager added");
  }],

  ["get", "notifications", () => ok(db.notifications)],
];

const compiled = routes.map(([method, pattern, handler]) => {
  const keys = [];
  const source = pattern
    .split("/")
    .map((part) => {
      if (part.startsWith(":")) {
        keys.push(part.slice(1));
        return "([^/]+)";
      }
      return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    })
    .join("/");
  return { method, regex: new RegExp(`^${source}$`), keys, handler };
});

const delay = (value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), LATENCY_MS));

export const mockRequest = async (method, url, body) => {
  const path = url.split("?")[0].replace(/^\/+|\/+$/g, "");

  // Upload endpoints receive FormData with the file under "file".
  if (path.startsWith("files/upload")) {
    const file = body && typeof body.get === "function" ? body.get("file") : null;
    const fileUrl = await fileToUrl(file);
    return delay({ status: true, message: "File uploaded", url: fileUrl, data: { url: fileUrl } });
  }

  for (const route of compiled) {
    if (route.method !== method) continue;
    const match = path.match(route.regex);
    if (!match) continue;
    const params = {};
    route.keys.forEach((key, i) => {
      params[key] = decodeURIComponent(match[i + 1]);
    });
    const result = route.handler(params, body);
    if (method !== "get") persist();
    return delay(clone(result));
  }

  console.warn(`[mock api] no handler for ${method.toUpperCase()} ${path}`);
  return delay(fail(`Mock API has no handler for ${method.toUpperCase()} ${path}`));
};
