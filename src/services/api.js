import axios from "axios";

const API =
  axios.create({

    baseURL:
      "https://crypto-backend-dojp.onrender.com/api",
  });


// TOKEN INTERCEPTOR

API.interceptors.request.use(
  (req) => {

    const token =
      localStorage.getItem(
        "token"
      );

    if (token) {

      req.headers.Authorization =
        `Bearer ${token}`;
    }

    return req;
  }
);

export default API;