import { io } from "socket.io-client";

const SOCKET_URL =
  "https://stream.binance.com:9443/ws/btcusdt@trade";

let socket;

export const connectSocket =
  (onMessage) => {

    socket =
      new WebSocket(
        SOCKET_URL
      );

    socket.onmessage =
      (event) => {

        const data =
          JSON.parse(
            event.data
          );

        onMessage(data);
      };
  };

export const disconnectSocket =
  () => {

    if (socket) {

      socket.close();
    }
  };