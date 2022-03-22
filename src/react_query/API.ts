const GET = {
  institutions: "/api/institutions",
  searchCities: (queryString = "") => `/api/search/cities?text=${queryString}`,
} as const;

const POST = {
  institutions: "/api/institutions",
} as const;

const API = {
  GET,
  POST,
};

export default API;
