import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api/wallet";

/* =========================
   GET WALLET
========================= */

export const getWallet =
  async (userId) => {
    const response =
      await axios.get(
        `${API}/${userId}`
      );

    return response.data;
  };

/* =========================
   DEPOSIT
========================= */

export const depositFunds =
  async (
    userId,
    asset,
    amount
  ) => {
    const response =
      await axios.post(
        `${API}/deposit`,
        {
          userId,
          asset,
          amount,
        }
      );

    return response.data;
  };

/* =========================
   WITHDRAW
========================= */

export const withdrawFunds =
  async (
    userId,
    asset,
    amount
  ) => {
    const response =
      await axios.post(
        `${API}/withdraw`,
        {
          userId,
          asset,
          amount,
        }
      );

    return response.data;
  };