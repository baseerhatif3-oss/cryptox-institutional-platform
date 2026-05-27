import axios from "axios";

const API =
  axios.create({

    baseURL:
      "https://api.coingecko.com/api/v3",
  });

export const getMarkets =
  async () => {

    const response =
      await API.get(

        "/coins/markets",

        {
          params: {

            vs_currency:
              "usd",

            order:
              "market_cap_desc",

            per_page:
              10,

            page:
              1,

            sparkline:
              false,
          },
        }
      );

    return response.data;
  };