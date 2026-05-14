import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import API from "../api";

function Wallet() {
  const [wallet, setWallet] =
    useState(null);

  const [btcPrice, setBtcPrice] =
    useState(50000);

  useEffect(() => {
    fetchWallet();
    fetchBTCPrice();
  }, []);

  /* FETCH WALLET */

  const fetchWallet =
    async () => {
      try {
        const { data } =
          await API.get(
            "/trade/wallet"
          );

        setWallet(data);
      } catch (error) {
        console.log(error);
      }
    };

  /* BTC PRICE */

  const fetchBTCPrice =
    async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );

        const data =
          await res.json();

        setBtcPrice(
          data.bitcoin.usd
        );
      } catch (error) {
        console.log(error);
      }
    };

  const totalBalance =
    (wallet?.USDT || 0) +
    (wallet?.BTC || 0) *
      btcPrice;

  return (
    <DashboardLayout>
      <h1
        style={{
          color: "white",
        }}
      >
        Wallet
      </h1>

      {/* TOTAL */}

      <div
        style={{
          background: "#22c55e",
          padding: "30px",
          borderRadius: "20px",
          marginTop: "30px",
          color: "white",
        }}
      >
        <h2>
          Total Portfolio Value
        </h2>

        <h1>
          $
          {totalBalance.toFixed(
            2
          )}
        </h1>
      </div>

      {/* WALLET CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",

          gap: "20px",

          marginTop: "30px",
        }}
      >
        {/* BTC */}

        <div style={card}>
          <h3>BTC</h3>

          <h1>
            {wallet?.BTC?.toFixed(
              6
            ) || "0"}{" "}
            BTC
          </h1>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            $
            {(
              (wallet?.BTC ||
                0) * btcPrice
            ).toFixed(2)}
          </p>
        </div>

        {/* USDT */}

        <div style={card}>
          <h3>USDT</h3>

          <h1>
            $
            {wallet?.USDT?.toFixed(
              2
            ) || "0"}
          </h1>
        </div>

        {/* BTC PRICE */}

        <div style={card}>
          <h3>BTC Price</h3>

          <h1>
            ${btcPrice}
          </h1>
        </div>
      </div>
    </DashboardLayout>
  );
}

const card = {
  background: "#1e293b",
  padding: "30px",
  borderRadius: "20px",
  color: "white",
};

export default Wallet;