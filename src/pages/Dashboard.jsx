import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

import Loader from "../components/Loader";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const [loading, setLoading] =
    useState(true);

  const [prices, setPrices] =
    useState({
      BTC: null,
      ETH: null,
      SOL: null,
    });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =
    async () => {
      try {
        const response =
          await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana"
          );

        const data =
          await response.json();

        setPrices({
          BTC:
            data[0]
              .current_price,

          ETH:
            data[1]
              .current_price,

          SOL:
            data[2]
              .current_price,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      }
    };

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        background:
          "#020617",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft:
            window.innerWidth >
            768
              ? "250px"
              : "0px",
          marginTop: "80px",
          padding: "30px",
          color: "white",
          fontFamily:
            "Arial",
        }}
      >
        <h1>
          CryptoX Exchange
        </h1>

        <p>
          Welcome{" "}
          {user.name}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={card}>
            <h2>
              ₿ Bitcoin
            </h2>

            <h1>
              $
              {prices.BTC.toLocaleString()}
            </h1>
          </div>

          <div style={card}>
            <h2>
              ♦ Ethereum
            </h2>

            <h1>
              $
              {prices.ETH.toLocaleString()}
            </h1>
          </div>

          <div style={card}>
            <h2>
              ◎ Solana
            </h2>

            <h1>
              $
              {prices.SOL.toLocaleString()}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

const card = {
  background:
    "linear-gradient(135deg,#0f172a,#1e293b)",
  padding: "30px",
  borderRadius: "20px",
};

export default Dashboard;