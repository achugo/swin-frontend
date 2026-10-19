// The only place the app talks to EmailJS. With the mock API on (the default),
// contact messages go to the mock's guest/contact endpoint instead, so the
// form works offline. EmailJS ids come from REACT_APP_EMAILJS_* env vars.
import emailjs from "emailjs-com";
import api, { USE_MOCK } from "../api/api";

const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_USER_ID,
  REACT_APP_CONTACT_EMAIL,
} = process.env;

// Resolves to { status } like emailjs.send, so callers can check status === 200.
export const sendContactEmail = (message) => {
  const templateParams = {
    from_name: REACT_APP_CONTACT_EMAIL,
    to_name: REACT_APP_CONTACT_EMAIL,
    subject: "NEW CONTACT EMAIL",
    message: `Contact details ${message}`,
  };

  if (USE_MOCK) {
    return api
      .create("guest/contact", templateParams)
      .then((res) => ({ status: res.status ? 200 : 500 }));
  }

  return emailjs.send(
    REACT_APP_EMAILJS_SERVICE_ID,
    REACT_APP_EMAILJS_TEMPLATE_ID,
    templateParams,
    REACT_APP_EMAILJS_USER_ID
  );
};
