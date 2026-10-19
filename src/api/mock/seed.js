// Seed data served by the mock API (see ./handlers.js).
// Shapes mirror what the swinhub API returns to each page.
import sapLogo from "../../img-assets/sap.png";
import pipeproLogo from "../../img-assets/pipepro_poster.png";
import systemLogo from "../../img-assets/system.png";
import softwareLogo from "../../img-assets/software-i.png";
import productImage from "../../img-assets/product-image.png";
import featuredImage from "../../img-assets/featured-image.png";
import bannerImage from "../../img-assets/banner-image.png";
import sapIntImage from "../../img-assets/sap_int.png";
import simpleWorkImage from "../../img-assets/simple_work.png";
import defineImage from "../../img-assets/define.png";
import demoVideo from "../../video_assets/dummy.mp4";
import payrollVideo from "../../video_assets/iPaySuite-Payroll-Solution.webm";

// Product ids are UUIDs because notification links are parsed by taking
// the last 36 characters (see pages/notifications/Notifications.js).
export const PRODUCT_IDS = {
  payroll: "3f6c2a1e-8b4d-4c7a-9e21-5d0f7a6b1c01",
  pipepro: "7a1d9e44-2c3b-4f8e-a6d5-91b0c3e2f402",
  erp: "b52e7f10-4d6a-4b91-8c3e-0a7d5f9e6c03",
  crm: "e9c4b3a2-7f1e-4d5c-b8a9-3c6e2d1f0a04",
};

export const CURRENT_USER_ID = 1;

// Log in with these on /login. Registering through the mock adds to this map.
export const DEMO_CREDENTIALS = {
  email: "demo@swinhub.com",
  password: "swinhub-demo",
};

// Every seeded date is relative to this fixed instant, not the real clock,
// so the same build always renders the same screens.
export const SEED_NOW = Date.UTC(2026, 0, 15, 12, 0, 0);

const iso = (daysAgo) =>
  new Date(SEED_NOW - daysAgo * 24 * 60 * 60 * 1000).toISOString();

const users = [
  {
    id: 1,
    first_name: "Demo",
    last_name: "User",
    email: "demo@swinhub.com",
    phone_number: "+234 803 000 0001",
    status: "active",
    user_type: "vendor",
    company: "Swinhub Demo Ltd",
    address: "12 Admiralty Way, Lekki, Lagos",
    created_at: iso(120),
  },
  {
    id: 2,
    first_name: "Ayobami",
    last_name: "Adeyemi",
    email: "ayobami@swinhub.com",
    phone_number: "+234 803 000 0002",
    status: "active",
    created_at: iso(90),
  },
  {
    id: 3,
    first_name: "Onyeka",
    last_name: "Okafor",
    email: "onyeka@swinhub.com",
    phone_number: "+234 803 000 0003",
    status: "active",
    created_at: iso(75),
  },
  {
    id: 4,
    first_name: "Thandi",
    last_name: "Mokoena",
    email: "thandi@swinhub.com",
    phone_number: "+27 82 000 0004",
    status: "pending",
    created_at: iso(30),
  },
  {
    id: 5,
    first_name: "Kwame",
    last_name: "Mensah",
    email: "kwame@swinhub.com",
    phone_number: "+233 24 000 0005",
    status: "active",
    created_at: iso(12),
  },
];

const categoriesFor = (...names) => names.map((category) => ({ category }));

const products = [
  {
    id: PRODUCT_IDS.payroll,
    name: "iPaySuite Payroll",
    category: "Human Resources",
    logo: softwareLogo,
    description:
      "iPaySuite automates payroll, statutory deductions and payslip distribution for growing African businesses, with built-in PAYE, pension and NHF compliance.",
    user_id: CURRENT_USER_ID,
    created_at: iso(100),
    assets: [
      { id: 1, type: "video", name: "Product tour", file: payrollVideo },
      { id: 2, type: "image", name: "Dashboard", file: productImage },
      { id: 3, type: "image", name: "Payslips", file: featuredImage },
    ],
    specifications: [
      { name: "web based, Saas, Cloud" },
      { name: "Platform" },
      { name: "Small" },
      { name: "Medium" },
      { name: "Live online" },
      { name: "Documentation" },
      { name: "Email" },
      { name: "Live chat" },
      { name: "Licensed based" },
    ],
    file_categories: categoriesFor("Demo", "Presentations", "Blog", "Webinars"),
  },
  {
    id: PRODUCT_IDS.pipepro,
    name: "PipePro",
    category: "Oil & Gas",
    logo: pipeproLogo,
    description:
      "PipePro gives pipeline operators real-time integrity monitoring, inspection scheduling and regulatory reporting from a single dashboard.",
    user_id: CURRENT_USER_ID,
    created_at: iso(80),
    assets: [
      { id: 4, type: "video", name: "Overview", file: demoVideo },
      { id: 5, type: "image", name: "Monitoring", file: bannerImage },
    ],
    specifications: [
      { name: "Windows OS" },
      { name: "Premise" },
      { name: "Large" },
      { name: "In person" },
      { name: "Phone calls" },
      { name: "Licensed based" },
    ],
    file_categories: categoriesFor("Demo", "Tutorials", "Blog", "References"),
  },
  {
    id: PRODUCT_IDS.erp,
    name: "SAP Business One",
    category: "ERP",
    logo: sapLogo,
    description:
      "An integrated ERP for small and midsize businesses covering accounting, inventory, purchasing and sales, deployed and supported by local partners.",
    user_id: 2,
    created_at: iso(60),
    assets: [
      { id: 6, type: "video", name: "Demo", file: demoVideo },
      { id: 7, type: "image", name: "Integration", file: sapIntImage },
      { id: 8, type: "image", name: "Workflow", file: simpleWorkImage },
    ],
    specifications: [
      { name: "Windows OS" },
      { name: "web based, Saas, Cloud" },
      { name: "Platform" },
      { name: "Premise" },
      { name: "Medium" },
      { name: "Large" },
      { name: "Webinars" },
      { name: "Online videos" },
      { name: "Email" },
      { name: "Free trial" },
    ],
    file_categories: categoriesFor(
      "Demo",
      "Whats' New",
      "Presentations",
      "Blog",
      "Banners/Fliers"
    ),
  },
  {
    id: PRODUCT_IDS.crm,
    name: "Fundle CRM",
    category: "Sales & Marketing",
    logo: systemLogo,
    description:
      "Fundle CRM tracks leads, deals and customer conversations across WhatsApp, email and phone so sales teams never lose a follow-up.",
    user_id: 3,
    created_at: iso(25),
    assets: [{ id: 9, type: "image", name: "Pipeline", file: defineImage }],
    specifications: [
      { name: "IOS App" },
      { name: "Android App" },
      { name: "web based, Saas, Cloud" },
      { name: "Small" },
      { name: "Online videos" },
      { name: "Live chat" },
      { name: "Free trial" },
    ],
    file_categories: categoriesFor("Demo", "Podcast", "Blog"),
  },
];

let fileId = 1;
const file = (product_id, category, title, overrides = {}) => ({
  id: fileId++,
  product_id,
  category,
  title,
  description: `${title} for ${
    products.find((p) => p.id === product_id).name
  }.`,
  file: productImage,
  type: "image/png",
  access: "open",
  created_at: iso(fileId * 3),
  ...overrides,
});

const files = [
  file(PRODUCT_IDS.payroll, "Demo", "Payroll run walkthrough", {
    file: payrollVideo,
    type: "video/webm",
  }),
  file(PRODUCT_IDS.payroll, "Presentations", "iPaySuite sales deck", {
    file: featuredImage,
  }),
  file(PRODUCT_IDS.payroll, "Presentations", "Pricing and licensing", {
    access: "restricted",
  }),
  file(PRODUCT_IDS.payroll, "Webinars", "Payroll compliance in 2021", {
    file: demoVideo,
    type: "video/mp4",
  }),
  file(PRODUCT_IDS.payroll, "Blog", "Payroll banner", { file: bannerImage }),
  file(PRODUCT_IDS.pipepro, "Demo", "PipePro live demo", {
    file: demoVideo,
    type: "video/mp4",
  }),
  file(PRODUCT_IDS.pipepro, "Tutorials", "Setting up inspection schedules", {
    file: bannerImage,
  }),
  file(PRODUCT_IDS.pipepro, "References", "NNPC deployment case study", {
    access: "restricted",
  }),
  file(PRODUCT_IDS.erp, "Demo", "SAP B1 in 10 minutes", {
    file: demoVideo,
    type: "video/mp4",
  }),
  file(PRODUCT_IDS.erp, "Whats' New", "Release 10.0 highlights", {
    file: sapIntImage,
  }),
  file(PRODUCT_IDS.erp, "Presentations", "Partner presentation", {
    access: "restricted",
  }),
  file(PRODUCT_IDS.erp, "Banners/Fliers", "Trade show flier", {
    file: simpleWorkImage,
  }),
  file(PRODUCT_IDS.crm, "Demo", "Fundle CRM demo", { file: defineImage }),
  file(PRODUCT_IDS.crm, "Podcast", "Selling over WhatsApp", {
    file: demoVideo,
    type: "video/mp4",
  }),
];

const posts = [
  {
    id: 1,
    product_id: PRODUCT_IDS.payroll,
    title: "Five payroll mistakes that cost SMEs money",
    body: "From missed pension remittances to manual PAYE calculations, these are the errors we see most often and how to avoid them.",
    image: featuredImage,
    created_at: iso(20),
  },
  {
    id: 2,
    product_id: PRODUCT_IDS.payroll,
    title: "Running payroll for remote teams",
    body: "How iPaySuite handles staff spread across states with different tax authorities.",
    image: productImage,
    created_at: iso(9),
  },
  {
    id: 3,
    product_id: PRODUCT_IDS.pipepro,
    title: "Predictive maintenance for pipelines",
    body: "Using inspection history to schedule maintenance before failures happen.",
    image: bannerImage,
    created_at: iso(15),
  },
  {
    id: 4,
    product_id: PRODUCT_IDS.erp,
    title: "Integrating SAP B1 with your e-commerce store",
    body: "A step-by-step guide to syncing orders and inventory.",
    image: sapIntImage,
    created_at: iso(11),
  },
  {
    id: 5,
    product_id: PRODUCT_IDS.crm,
    title: "Why your sales team needs a CRM",
    body: "Spreadsheets break once you pass 50 active deals. Here is what to do instead.",
    image: defineImage,
    created_at: iso(4),
  },
];

const comments = [
  { id: 1, post_id: 1, user_id: 2, comment: "Very helpful, the pension section especially.", created_at: iso(18) },
  { id: 2, post_id: 1, user_id: 3, comment: "We made mistake #3 last year. Lesson learnt!", created_at: iso(17) },
  { id: 3, post_id: 2, user_id: 5, comment: "Does this cover Ghana as well?", created_at: iso(8) },
  { id: 4, post_id: 3, user_id: 4, comment: "Would love a webinar on this topic.", created_at: iso(14) },
  { id: 5, post_id: 4, user_id: 2, comment: "Which plugins do you recommend for WooCommerce?", created_at: iso(10) },
];

const reviewer = (id, user_id, done, daysAgo, ratings = null) => ({
  id,
  user_id,
  review: done ? "Meets our requirements for this stage." : null,
  ratings: done ? ratings : null,
  updated_at: iso(daysAgo),
});

const reviews = [
  {
    id: 1,
    product_id: PRODUCT_IDS.erp,
    name: "SAP Business One Review",
    stages: 2,
    created_at: iso(14),
    review_stages: [
      {
        id: 1,
        name: "Finance",
        reviewers: [reviewer(1, 2, true, 10, 4), reviewer(2, 3, true, 9, 5)],
      },
      {
        id: 2,
        name: "Operations",
        reviewers: [reviewer(3, 4, false, 9), reviewer(4, 5, false, 9)],
      },
    ],
  },
  {
    id: 2,
    product_id: PRODUCT_IDS.crm,
    name: "Fundle CRM Review",
    stages: 1,
    created_at: iso(5),
    review_stages: [
      {
        id: 3,
        name: "Sales",
        reviewers: [reviewer(5, 3, true, 3, 3), reviewer(6, 5, false, 3)],
      },
    ],
  },
];

const sales = [
  { id: 1, user_id: 2, country: "Nigeria", region: "Lagos", created_at: iso(40) },
  { id: 2, user_id: 4, country: "South Africa", region: "Gauteng", created_at: iso(22) },
  { id: 3, user_id: 5, country: "Ghana", region: "Greater Accra", created_at: iso(6) },
];

// The page JSON.parses `data` and reads [0].details.
const notification = (id, action, mail_subject, product_id, daysAgo) => ({
  id,
  type: "App\\Notifications\\" + action.replace(/\s/g, ""),
  data: JSON.stringify([
    {
      details: {
        action,
        mail_subject,
        link: `https://app.swinhub.com/dashboard/product-evaluation/${product_id}`,
      },
    },
  ]),
  read_at: null,
  created_at: iso(daysAgo),
});

const notifications = [
  notification(1, "Check Product", "You have been invited to evaluate SAP Business One", PRODUCT_IDS.erp, 9),
  notification(2, "Review", "Finance stage of SAP Business One Review is complete", PRODUCT_IDS.erp, 8),
  notification(3, "Check Product", "You have been invited to evaluate Fundle CRM", PRODUCT_IDS.crm, 3),
  notification(4, "Review", "Ayobami Adeyemi requested access to Pricing and licensing", PRODUCT_IDS.payroll, 1),
];

const seed = {
  users,
  products,
  files,
  posts,
  comments,
  reviews,
  sales,
  notifications,
  specifications: [],
  stages: [],
  contacts: [],
  access_requests: [],
  profile: { ...users[0] },
  passwords: { [DEMO_CREDENTIALS.email]: DEMO_CREDENTIALS.password },
};

export default seed;
