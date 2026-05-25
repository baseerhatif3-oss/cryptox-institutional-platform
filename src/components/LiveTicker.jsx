import {
  useEffect,
  useState,
} from "react";

import {
  connectSocket,
  disconnectSocket,
} from "../services/socketService";

const LiveTicker = () => {

  const [price, setPrice] =
    useState("0");

  useEffect(() => {

    connectSocket(
      (data) => {

        setPrice(
          Number(
            data.p
          ).toFixed(2)
        );
      }
    );

    return () =>
      disconnectSocket();

  }, []);

  return (

    <div className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-black text-xl">

      BTC/USDT:
      ${
        price
      }

    </div>
  );
};

export default LiveTicker;