import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import TradingViewWidget from "react-tradingview-widget";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const [prices, setPrices] =
    useState({
      BTC: 0,
      ETH: 0,
      SOL: 0,
    });

  const [wallet, setWallet] =
    useState({
      BTC: 0,
      ETH: 0,
      SOL: 0,
      USDT: 0,
    });

  const [amount, setAmount] =
    useState("");

  const [coin, setCoin] =
    useState("BTC");

  useEffect(() => {
    fetchPrices();

    fetchWallet();
  }, []);

  /* FETCH PRICES */

  const fetchPrices =
    async () => {
      const response =
        await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
        );

      const data =
        await response.json();

      setPrices({
        BTC: data.bitcoin.usd,
        ETH: data.ethereum.usd,
        SOL: data.solana.usd,
      });
    };

  /* WALLET */

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

  /* BUY */

  const buyCoin =
    async () => {
      alert(
        "Multi-coin trading UI ready 🔥"
      );
    };

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
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
            Crypto Exchange
          </h1>

          <p>
            Welcome{" "}
            {user.name}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => {
              window.location.href =
                "/portfolio";
            }}
            style={navBtn}
          >
            Portfolio
          </button>

          <button
            onClick={() => {
              window.location.href =
                "/transactions";
            }}
            style={navBtn}
          >
            Transactions
          </button>

          <button
            onClick={() => {
              localStorage.removeItem(
                "userInfo"
              );

              window.location.href =
                "/";
            }}
            style={logoutBtn}
          >
            Logout
          </button>
        </div>
      </div>

      {/* MARKET */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={card}>
          <h2>Bitcoin</h2>

          <h1>
            $
            {prices.BTC.toLocaleString()}
          </h1>

          <p>
            {wallet.BTC.toFixed(
              4
            )}{" "}
            BTC
          </p>
        </div>

        <div style={card}>
          <h2>Ethereum</h2>

          <h1>
            $
            {prices.ETH.toLocaleString()}
          </h1>

          <p>
            {wallet.ETH.toFixed(
              4
            )}{" "}
            ETH
          </p>
        </div>

        <div style={card}>
          <h2>Solana</h2>

          <h1>
            $
            {prices.SOL.toLocaleString()}
          </h1>

          <p>
            {wallet.SOL.toFixed(
              4
            )}{" "}
            SOL
          </p>
        </div>

        <div style={card}>
          <h2>USDT</h2>

          <h1>
            $
            {wallet.USDT.toFixed(
              2
            )}
          </h1>
        </div>
      </div>

      {/* TRADE */}

      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h2>
          Multi-Coin Trading
        </h2>

        <select
          value={coin}
          onChange={(e) =>
            setCoin(
              e.target.value
            )
          }
          style={input}
        >
          <option>
            BTC
          </option>

          <option>
            ETH
          </option>

          <option>
            SOL
          </option>
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          style={input}
        />

        <button
          onClick={buyCoin}
          style={buyBtn}
        >
          Buy {coin}
        </button>
      </div>

      {/* CHART */}

      <div
        style={{
          background: "#0f172a",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <TradingViewWidget
          symbol="BINANCE:BTCUSDT"
          theme="dark"
          autosize
        />
      </div>
    </div>
  );
}

/* STYLES */

const card = {
  background: "#0f172a",
  padding: "25px",
  borderRadius: "20px",
};

const input = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "none",
  marginBottom: "20px",
};

const buyBtn = {
  background: "#22c55e",
  border: "none",
  padding: "14px 20px",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
};

const logoutBtn = {
  background: "#ef4444",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
};

const navBtn = {
  background: "#2563eb",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
};

export default Dashboard;