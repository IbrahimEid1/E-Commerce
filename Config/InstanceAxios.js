// Axios Config
import axios from "axios";

const instance = axios.create({
  baseURL: "https://impressive-melody-d61bf3c241.strapiapp.com/api",
});

export default instance;
