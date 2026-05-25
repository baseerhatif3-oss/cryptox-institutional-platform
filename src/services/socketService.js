let socket = null;

export const connectBTCSocket = (
  onMessage
) => {

  socket =
    new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@trade"
    );

  socket.onmessage = (
    event
  ) => {

    const data =
      JSON.parse(
        event.data
      );

    onMessage(data);
  };

  socket.onerror = (
    error
  ) => {

    console.log(
      "WebSocket Error:",
      error
    );
  };

  socket.onclose = () => {

    console.log(
      "WebSocket Closed"
    );
  };
};

export const disconnectSocket =
  () => {

    if (socket) {

      socket.close();
    }
};