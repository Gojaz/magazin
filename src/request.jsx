import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "bearer " +
      "64abc906d430604409d3cc88f3e3e8ea523ce66fd6baf1cbede19349a3a1edd9a1f487a0ee622e271ce0da030040dd6836b9b326acbe79f4ded77c1bd5ceb3a24a714d397a5d1b98eff6d1f999c1a4e33e0ff4cf7e88d1ec078ff0c5ba30aafa5ac4e2fc97212a5b892039ebf2c0ee3614842038bd75cd6741544d4d935e172f",
  },
});
