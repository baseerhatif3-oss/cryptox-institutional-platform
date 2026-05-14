import API from "./api";

/* REGISTER */

export const registerUser = async (userData) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

/* LOGIN */

export const loginUser = async (userData) => {
  const response = await API.post("/auth/login", userData);
  return response.data;
};

/* WALLET */

export const getWallet = async (token) => {
  const response = await API.get("/trade/wallet", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

/* BUY BTC */

export const buyBTC = async (amount, token) => {
  const response = await API.post(
    "/trade/buy",
    { amount },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

/* SELL BTC */

export const sellBTC = async (amount, token) => {
  const response = await API.post(
    "/trade/sell",
    { amount },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

/* TRANSACTIONS */

export const getTransactions = async (token) => {
  const response = await API.get("/trade/transactions", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};