import API from "./api";

export const placeOrder = async (
  orderData
) => {

  const res =
    await API.post(
      "/orders/place",
      orderData
    );

  return res.data;
};

export const getOrders =
  async () => {

    const res =
      await API.get(
        "/orders/my-orders"
      );

    return res.data;
  };