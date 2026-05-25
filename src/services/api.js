import axios from "axios";

const API =
  axios.create({

    baseURL:
      "https://crypto-backend-dojp.onrender.com/api",

    withCredentials: true,
  });

export default API;