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

  const [btcPrice, setBtcPrice] =
    useState(0);

  const [wallet, setWallet] =
    useState({
      BTC: 0,
      USDT: 0,
    });

  const [amount, setAmount] =
    useState("");

  useEffect(() => {
    fetchBTCPrice();

    fetchWallet();
  }, []);

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

  /* BUY BTC */

  const buyBTC =
    async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        await axios.post(
          "https://crypto-platform-backend-d2az.onrender.com/api/trade/buy",
          {
            amount:
              Number(amount),
            price: btcPrice,
          },
          config
        );

        alert(
          "BTC Purchased Successfully"
        );

        setAmount("");

        fetchWallet();
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Buy Failed"
        );
      }
    };

  /* SELL BTC */

  const sellBTC =
    async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        await axios.post(
          "https://crypto-platform-backend-d2az.onrender.com/api/trade/sell",
          {
            amount:
              Number(amount),
            price: btcPrice,
          },
          config
        );

        alert(
          "BTC Sold Successfully"
        );

        setAmount("");

        fetchWallet();
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Sell Failed"
        );
      }
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
            Crypto Dashboard
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
          }}
        >
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

      {/* WALLET */}

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
          <h2>
            USDT Balance
          </h2>

          <h1>
            $
            {wallet.USDT?.toFixed(
              2
            )}
          </h1>
        </div>

        <div style={card}>
          <h2>
            BTC Holdings
          </h2>

          <h1>
            {wallet.BTC?.toFixed(
              6
            )}{" "}
            BTC
          </h1>
        </div>

        <div style={card}>
          <h2>
            BTC Price
          </h2>

          <h1>
            $
            {btcPrice.toLocaleString()}
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
          Trade Bitcoin
        </h2>

        <input
          type="number"
          placeholder="BTC Amount"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          style={input}
        />

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={buyBTC}
            style={buyBtn}
          >
            Buy BTC
          </button>

          <button
            onClick={sellBTC}
            style={sellBtn}
          >
            Sell BTC
          </button>
        </div>
      </div>

      {/* LIVE CHART */}

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
  marginTop: "20px",
};

const buyBtn = {
  background: "#22c55e",
  border: "none",
  padding: "14px 20px",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
};

const sellBtn = {
  background: "#ef4444",
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