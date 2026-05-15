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
      BTC: null,
      ETH: null,
      SOL: null,
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
      try {
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
      } catch (error) {
        console.log(error);
      }
    };

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

  /* BUY */

  const buyCoin =
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
            asset: coin,
            amount:
              Number(amount),
            price:
              prices[coin],
          },
          config
        );

        alert(
          `${coin} Purchased Successfully`
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

  /* SELL */

  const sellCoin =
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
            asset: coin,
            amount:
              Number(amount),
            price:
              prices[coin],
          },
          config
        );

        alert(
          `${coin} Sold Successfully`
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

  /* CHART */

  const getChartSymbol =
    () => {
      if (coin === "BTC")
        return "BINANCE:BTCUSDT";

      if (coin === "ETH")
        return "BINANCE:ETHUSDT";

      if (coin === "SOL")
        return "BINANCE:SOLUSDT";

      return "BINANCE:BTCUSDT";
    };

  /* LOADING SCREEN */

  if (
    prices.BTC === null
  ) {
    return (
      <div
        style={{
          background:
            "#020617",
          minHeight: "100vh",
          display: "flex",
          justifyContent:
            "center",
          alignItems: "center",
          color: "white",
          fontSize: "30px",
          fontFamily: "Arial",
        }}
      >
        Loading Exchange...
      </div>
    );
  }

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
          Trade Crypto
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
          placeholder={`Amount of ${coin}`}
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          style={input}
        />

        <h3>
          Current Price: $
          {
            prices[coin]
          }
        </h3>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={buyCoin}
            style={buyBtn}
          >
            Buy {coin}
          </button>

          <button
            onClick={sellCoin}
            style={sellBtn}
          >
            Sell {coin}
          </button>
        </div>
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
          symbol={getChartSymbol()}
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