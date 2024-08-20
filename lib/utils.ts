export const BASE_URL =
  process.env.BASE_URL ||
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` ||
  `https://${process.env.VERCEL_URL}` ||
  "http://localhost:3000";
