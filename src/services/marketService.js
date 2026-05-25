import axios from "axios";

const BASE_URL =
  "https://api.binance.com/api/v3";

export const getTickerPrice =
  async (symbol) => {

    const res =
      await axios.get(
        `${BASE_URL}/ticker/price?symbol=${symbol}`
      );

    return res.data;
  };

export const get24hrTicker =
  async (symbol) => {

    const res =
      await axios.get(
        `${BASE_URL}/ticker/24hr?symbol=${symbol}`
      );

    return res.data;
  };