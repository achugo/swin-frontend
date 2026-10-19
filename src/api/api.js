import axios from "axios";
import { mockRequest } from "./mock/handlers";

const token = localStorage.getItem("token");

axios.defaults.headers.common = {
  Authorization: `Bearer ${token || ""}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

const base_url =
  "https://fierce-shore-33740.herokuapp.com/https://api.swinhub.com/api/";

// Requests are answered in the browser from ./mock/seed.js unless
// REACT_APP_USE_MOCK=false, so the app runs offline with no API keys.
export const USE_MOCK = process.env.REACT_APP_USE_MOCK !== "false";

// Mock uploads return complete URLs, so there is nothing to prefix.
export const url_base = USE_MOCK ? "" : "https://api.swinhub.com/";

const create = (url, newObject) => {
  if (USE_MOCK) return mockRequest("post", url, newObject);
  return axios
    .post(base_url + url, newObject)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else {
        throw new Error(err.response.data.message);
      }
      //throw new Error(err.response.data.message);
    });
};

const patch = (url, newObject) => {
  if (USE_MOCK) return mockRequest("patch", url, newObject);
  return axios
    .patch(base_url + url, newObject)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else {
        alert(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

const upload = (url, newObject) => {
  if (USE_MOCK) return mockRequest("post", url, newObject);
  return axios
    .post("http://api.swinhub.com/api/" + url, newObject)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else {
        alert(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

const get = (url, newObject) => {
  if (USE_MOCK) return mockRequest("get", url, newObject);
  return axios
    .get(base_url + url, { params: newObject })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else if (err.request) {
        return err.request;
      } else {
        console.log(err);
        //throw new Error(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

export default { create, get, upload, patch };
