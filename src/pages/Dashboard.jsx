import React, {
  useEffect,
  useState,
} from "react";

import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

import axios from "axios";

function Dashboard() {
  const [prices, setPrices] =
    useState({
      BTC: {
        price: 0,
        change: 0,
      },

      ETH: {
        price: 0,
        change: 0,
      },

      SOL: {
        price: 0,
        change: 0,
      },
    });

  const [
    selectedCoin,
    setSelectedCoin,
  ] = useState("BTC");

  const [amount, setAmount] =
    useState("");

  useEffect(() => {
    fetchPrices();

    const interval =
      setInterval(() => {
        fetchPrices();
      }, 10000);

    return () =>
      clearInterval(interval);
  }, []);

  /* FETCH PRICES */

  const fetchPrices =
    async () => {
      try {
        const btc =
          await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true"
          );

        const eth =
          await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true"
          );

        const sol =
          await axios.get(
            "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true"
          );

        setPrices({
          BTC: {
            price:
              btc.data
                .bitcoin
                .usd,

            change:
              btc.data
                .bitcoin
                .usd_24h_change,
          },

          ETH: {
            price:
              eth.data
                .ethereum
                .usd,

            change:
              eth.data
                .ethereum
                .usd_24h_change,
          },

          SOL: {
            price:
              sol.data
                .solana
                .usd,

            change:
              sol.data
                .solana
                .usd_24h_change,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

  /* TRADE */

  const handleTrade =
    async (type) => {
      try {
        const userInfo =
          JSON.parse(
            localStorage.getItem(
              "userInfo"
            )
          );

        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/trade/${type}`,
          {
            asset:
              selectedCoin,

            amount:
              Number(amount),

            price:
              prices[
                selectedCoin
              ].price,
          },

          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        alert(
          `${type.toUpperCase()} Successful`
        );

        setAmount("");
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Trade Failed"
        );
      }
    };

  return (
    <div
      style={{
        background:
          "#020617",
        minHeight:
          "100vh",
        color: "white",
        padding: "30px",
        fontFamily:
          "Arial",
      }}
    >
      {/* HEADER */}

      <h1
        style={{
          fontSize: "40px",
          marginBottom:
            "10px",
        }}
      >
        CryptoX Exchange
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom:
            "40px",
        }}
      >
        Professional
        Cryptocurrency
        Trading Platform
      </p>

      {/* MARKET CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",

          gap: "20px",

          marginBottom:
            "40px",
        }}
      >
        {/* BTC */}

        <div style={card}>
          <h2>
            ₿ Bitcoin
          </h2>

          <h1>
            $
            {prices.BTC.price}
          </h1>

          <p
            style={{
              color:
                prices.BTC
                  .change >=
                0
                  ? "#22c55e"
                  : "#ef4444",
            }}
          >
            {prices.BTC.change.toFixed(
              2
            )}
            %
          </p>
        </div>

        {/* ETH */}

        <div style={card}>
          <h2>
            ♦ Ethereum
          </h2>

          <h1>
            $
            {prices.ETH.price}
          </h1>

          <p
            style={{
              color:
                prices.ETH
                  .change >=
                0
                  ? "#22c55e"
                  : "#ef4444",
            }}
          >
            {prices.ETH.change.toFixed(
              2
            )}
            %
          </p>
        </div>

        {/* SOL */}

        <div style={card}>
          <h2>
            ◎ Solana
          </h2>

          <h1>
            $
            {prices.SOL.price}
          </h1>

          <p
            style={{
              color:
                prices.SOL
                  .change >=
                0
                  ? "#22c55e"
                  : "#ef4444",
            }}
          >
            {prices.SOL.change.toFixed(
              2
            )}
            %
          </p>
        </div>
      </div>

      {/* TRADE SECTION */}

      <div
        style={{
          background:
            "#0f172a",

          padding: "30px",

          borderRadius:
            "20px",

          marginBottom:
            "40px",
        }}
      >
        <h2
          style={{
            marginBottom:
              "20px",
          }}
        >
          Trade Crypto
        </h2>

        <select
          value={
            selectedCoin
          }
          onChange={(e) =>
            setSelectedCoin(
              e.target.value
            )
          }
          style={input}
        >
          <option value="BTC">
            BTC
          </option>

          <option value="ETH">
            ETH
          </option>

          <option value="SOL">
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

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            onClick={() =>
              handleTrade(
                "buy"
              )
            }
            style={buyBtn}
          >
            Buy
          </button>

          <button
            onClick={() =>
              handleTrade(
                "sell"
              )
            }
            style={sellBtn}
          >
            Sell
          </button>
        </div>
      </div>

      {/* TRADINGVIEW CHART */}

      <div
        style={{
          background:
            "#0f172a",

          borderRadius:
            "20px",

          padding: "10px",

          overflow:
            "hidden",
        }}
      >
        <AdvancedRealTimeChart
          theme="dark"
          symbol="BINANCE:BTCUSDT"
          autosize
        />
      </div>
    </div>
  );
}

/* STYLES */

const card = {
  background:
    "linear-gradient(135deg,#0f172a,#1e293b)",

  padding: "30px",

  borderRadius:
    "20px",
};

const input = {
  width: "100%",

  padding: "15px",

  borderRadius:
    "10px",

  border: "none",

  marginBottom:
    "20px",

  background:
    "#1e293b",

  color: "white",
};

const buyBtn = {
  background:
    "#22c55e",

  border: "none",

  padding:
    "14px 24px",

  borderRadius:
    "10px",

  color: "white",

  cursor: "pointer",
};

const sellBtn = {
  background:
    "#ef4444",

  border: "none",

  padding:
    "14px 24px",

  borderRadius:
    "10px",

  color: "white",

  cursor: "pointer",
};

export default Dashboard;