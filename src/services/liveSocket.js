import {
  io,
} from "socket.io-client";

const socket =
  io(
    "https://your-backend-url.onrender.com"
  );

export const connectLiveSocket =
  (
    onPriceUpdate
  ) => {

    socket.on(
      "connect",
      () => {

        console.log(
          "Connected to CryptoX live server"
        );
      }
    );

    socket.on(
      "welcome",
      (data) => {

        console.log(
          data.message
        );
      }
    );

    socket.on(
      "btc-price",
      (data) => {

        onPriceUpdate(
          data
        );
      }
    );
  };

export const disconnectLiveSocket =
  () => {

    socket.disconnect();
};