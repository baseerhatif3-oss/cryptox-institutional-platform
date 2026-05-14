import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import DashboardLayout from "../layouts/DashboardLayout";

const socket = io(
  "https://crypto-platform-backend-d2az.onrender.com"
);

function Dashboard() {
  const [price, setPrice] =
    useState(0);

  useEffect(() => {
    socket.on(
      "price-update",
      (data) => {
        setPrice(data.price);
      }
    );

    return () => {
      socket.off(
        "price-update"
      );
    };
  }, []);

  return (
    <DashboardLayout>
      <div
        style={{
          color: "white",
        }}
      >
        <h1>
          BTC/USDT Live Price
        </h1>

        <h2>
          $
          {price
            ? price.toLocaleString()
            : "Loading..."}
        </h2>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;