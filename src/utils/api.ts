import axios from "axios";

const client = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
});

const api = {
  fetchCountries: () => {
    return api.get("all");
  },
  get: (endpoint: string) => {
    return client.get(endpoint).then((response) => response.data);
  },
};

export default api;
