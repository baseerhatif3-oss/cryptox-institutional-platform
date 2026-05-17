import { io } from "socket.io-client";

const SOCKET_URL =
  "https://stream.binance.com:9443/ws";

export const createPriceSocket = (
  symbol,
  onPriceUpdate
) => {
  const socket = io(SOCKET_URL, {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log(
      "WebSocket connected"
    );
  });

  socket.on("message", (data) => {
    try {
      const parsed =
        JSON.parse(data);

      if (parsed.c) {
        onPriceUpdate(
          Number(parsed.c)
        );
      }
    } catch (error) {
      console.log(error);
    }
  });

  return socket;
};