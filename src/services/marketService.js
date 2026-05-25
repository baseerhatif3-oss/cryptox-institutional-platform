import axios from "axios";

const BASE_URL =
  "https://api.binance.com/api/v3";

export const getMarketPrices =
  async () => {

    try {

      const response =
        await axios.get(
          `${BASE_URL}/ticker/24hr`
        );

      return response.data;

    } catch (error) {

      console.log(
        "Market API Error:",
        error
      );

      return [];
    }
};

export const getBTCPrice =
  async () => {

    try {

      const response =
        await axios.get(
          `${BASE_URL}/ticker/price?symbol=BTCUSDT`
        );

      return response.data;

    } catch (error) {

      console.log(error);

      return null;
    }
};