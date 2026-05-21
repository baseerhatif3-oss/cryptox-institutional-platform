import { io } from "socket.io-client";

const socket =
  io(
    "https://crypto-backend-dojp.onrender.com",
    {
      transports: [
        "websocket",
      ],
    }
  );

export default socket;