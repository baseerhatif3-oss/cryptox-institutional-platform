import API from "./api";

export const fetchMarkets =
  async () => {

    const response =
      await API.get(
        "/api/markets/live"
      );

    return response.data.markets;
  };