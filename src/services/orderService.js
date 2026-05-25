import API from "./api";

export const placeOrder = async (orderData) => {

  const response =
    await API.post(
      "/orders/place",
      orderData
    );

  return response.data;
};

export const getOrders = async () => {

  const response =
    await API.get(
      "/orders/my-orders"
    );

  return response.data;
};