import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api/futures";

/* OPEN POSITION */

export const openPosition =
  async (data) => {
    const response =
      await axios.post(
        `${API}/open`,
        data
      );

    return response.data;
  };

/* GET POSITIONS */

export const getPositions =
  async (userId) => {
    const response =
      await axios.get(
        `${API}/${userId}`
      );

    return response.data;
  };