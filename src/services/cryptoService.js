import axios from "axios";

const API_URL =
  "https://api.coingecko.com/api/v3";

export const getCryptoPrices =
  async () => {
    const response =
      await axios.get(
        `${API_URL}/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true`
      );

    return response.data;
  };