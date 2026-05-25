import API from "./api";

export const getWallet =
  async () => {

    const res =
      await API.get(
        "/wallet/my-wallet"
      );

    return res.data;
  };