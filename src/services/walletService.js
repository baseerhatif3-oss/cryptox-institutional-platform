import API from "./api";

export const getWallet =
  async () => {

    const response =
      await API.get(
        "/wallet"
      );

    return response.data;
};

export const getTransactions =
  async () => {

    const response =
      await API.get(
        "/transactions"
      );

    return response.data;
};