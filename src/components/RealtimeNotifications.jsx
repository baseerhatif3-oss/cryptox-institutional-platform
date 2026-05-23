import {
  useEffect,
} from "react";

import toast from "react-hot-toast";

import socket from "../services/socket";

const RealtimeNotifications =
  () => {

    /*
    ==========================================
    SOCKET EVENTS
    ==========================================
    */

    useEffect(() => {

      /*
      ==========================================
      ORDER FILLED
      ==========================================
      */

      socket.on(
        "orderFilled",
        (data) => {

          toast.success(
            `Order Filled: ${data.symbol} ${data.quantity} @ $${data.price}`
          );
        }
      );

      /*
      ==========================================
      NEW TRADE
      ==========================================
      */

      socket.on(
        "newTrade",
        (trade) => {

          toast(
            `${trade.side} ${trade.symbol} executed`,
            {
              icon:
                trade.side ===
                "BUY"
                  ? "🟢"
                  : "🔴",
            }
          );
        }
      );

      return () => {

        socket.off(
          "orderFilled"
        );

        socket.off(
          "newTrade"
        );
      };

    }, []);

    return null;
  };

export default
  RealtimeNotifications;