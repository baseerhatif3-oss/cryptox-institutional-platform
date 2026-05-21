import axios from "axios";

const API =
axios.create({
  baseURL:
  "https://crypto-backend-dojp.onrender.com/api",
});

/* BUY */

export const buyCoin =
async (
  symbol,
  price,
  quantity
) => {

  const response =
    await API.post(
      "/spot/buy",
      {
        symbol,
        price,
        quantity,
      }
    );

  return response.data;
};

/* SELL */

export const sellCoin =
async (
  symbol,
  price,
  quantity
) => {

  const response =
    await API.post(
      "/spot/sell",
      {
        symbol,
        price,
        quantity,
      }
    );

  return response.data;
};

/* HISTORY */

export const getHistory =
async () => {

  const response =
    await API.get(
      "/spot/history"
    );

  return response.data;
};

export default API;