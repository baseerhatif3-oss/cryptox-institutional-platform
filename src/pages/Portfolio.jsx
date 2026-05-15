import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

function Portfolio() {
  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const [wallet, setWallet] =
    useState({
      BTC: 0,
      USDT: 0,
    });

  const [btcPrice, setBtcPrice] =
    useState(0);

  useEffect(() => {
    fetchWallet();

    fetchBTCPrice();
  }, []);

  /* FETCH WALLET */

  const fetchWallet =
    async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } =
          await axios.get(
            "https://crypto-platform-backend-d2az.onrender.com/api/trade/wallet",
            config
          );

        setWallet(data);
      } catch (error) {
        console.log(error);
      }
    };

  /* BTC PRICE */

  const fetchBTCPrice =
    async () => {
      const response =
        await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );

      const data =
        await response.json();

      setBtcPrice(
        data.bitcoin.usd
      );
    };

  /* VALUES */

  const btcValue =
    wallet.BTC * btcPrice;

  const totalPortfolio =
    wallet.USDT + btcValue;

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h1>
            Portfolio
          </h1>

          <p>
            Your crypto assets
          </p>
        </div>

        <button
          onClick={() => {
            window.location.href =
              "/dashboard";
          }}
          style={navBtn}
        >
          Dashboard
        </button>
      </div>

      {/* TOTAL VALUE */}

      <div
        style={{
          background: "#0f172a",
          padding: "40px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h2>
          Total Portfolio Value
        </h2>

        <h1
          style={{
            fontSize: "50px",
            color: "#22c55e",
          }}
        >
          $
          {totalPortfolio.toFixed(
            2
          )}
        </h1>
      </div>

      {/* ASSETS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {/* BTC */}

        <div style={card}>
          <h2>Bitcoin</h2>

          <h1>
            {wallet.BTC.toFixed(
              6
            )}{" "}
            BTC
          </h1>

          <p>
            Value: $
            {btcValue.toFixed(
              2
            )}
          </p>
        </div>

        {/* USDT */}

        <div style={card}>
          <h2>USDT</h2>

          <h1>
            $
            {wallet.USDT.toFixed(
              2
            )}
          </h1>

          <p>
            Stablecoin Balance
          </p>
        </div>

        {/* BTC PRICE */}

        <div style={card}>
          <h2>
            BTC Price
          </h2>

          <h1>
            $
            {btcPrice.toLocaleString()}
          </h1>

          <p>
            Live Market Price
          </p>
        </div>
      </div>
    </div>
  );
}

/* STYLES */

const card = {
  background: "#0f172a",
  padding: "30px",
  borderRadius: "20px",
};

const navBtn = {
  background: "#2563eb",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
};

export default Portfolio;