import API from "./api";

export const fetchStats =
  async () => {

    const response =
      await API.get(
        "/api/stats/overview"
      );

    return response.data.stats;
  };