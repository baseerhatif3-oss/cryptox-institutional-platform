import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import TradingViewWidget from "react-tradingview-widget";

import Sidebar from "../components/Sidebar";

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

    /* AUTO REFRESH */

    const interval =
      setInterval(() => {
        fetchPrices();
      }, 10000);

    return () =>
      clearInterval(interval);
  }, []);

  /* FETCH LIVE MARKET */

  const fetchPrices =
    async () => {
      try {
        const response =
          await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana"
          );

        const data =
          await response.json();

        setPrices({
          BTC: {
            price:
              data[0]
                .current_price,

            change:
              data[0]
                .price_change_percentage_24h,

            marketCap:
              data[0]
                .market_cap,
          },

          ETH: {
            price:
              data[1]
                .current_price,

            change:
              data[1]
                .price_change_percentage_24h,

            marketCap:
              data[1]
                .market_cap,
          },

          SOL: {
            price:
              data[2]
                .current_price,

            change:
              data[2]
                .price_change_percentage_24h,

            marketCap:
              data[2]
                .market_cap,
          },
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
              prices[coin]
                .price,
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
              prices[coin]
                .price,
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

  /* LOADING */

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
        display: "flex",
      }}
    >
      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

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
          fontFamily: "Arial",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            marginBottom: "40px",
          }}
        >
          <h1>
            Crypto Exchange
          </h1>

          <p>
            Welcome{" "}
            {user.name}
          </p>
        </div>

        {/* LIVE MARKET */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginBottom:
              "30px",
          }}
        >
          {/* BTC */}

          <div style={card}>
            <h2>
              Bitcoin
            </h2>

            <h1>
              $
              {prices.BTC.price.toLocaleString()}
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

            <p>
              Holdings:{" "}
              {wallet.BTC.toFixed(
                4
              )}{" "}
              BTC
            </p>
          </div>

          {/* ETH */}

          <div style={card}>
            <h2>
              Ethereum
            </h2>

            <h1>
              $
              {prices.ETH.price.toLocaleString()}
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

            <p>
              Holdings:{" "}
              {wallet.ETH.toFixed(
                4
              )}{" "}
              ETH
            </p>
          </div>

          {/* SOL */}

          <div style={card}>
            <h2>
              Solana
            </h2>

            <h1>
              $
              {prices.SOL.price.toLocaleString()}
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

            <p>
              Holdings:{" "}
              {wallet.SOL.toFixed(
                4
              )}{" "}
              SOL
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
              Stable Balance
            </p>
          </div>
        </div>

        {/* TRADING */}

        <div
          style={{
            background:
              "#0f172a",
            padding: "30px",
            borderRadius:
              "20px",
            marginBottom:
              "30px",
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
                .price
            }
          </h3>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop:
                "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={
                buyCoin
              }
              style={buyBtn}
            >
              Buy {coin}
            </button>

            <button
              onClick={
                sellCoin
              }
              style={sellBtn}
            >
              Sell {coin}
            </button>
          </div>
        </div>

        {/* CHART */}

        <div
          style={{
            background:
              "#0f172a",
            padding: "20px",
            borderRadius:
              "20px",
          }}
        >
          <TradingViewWidget
            symbol={getChartSymbol()}
            theme="dark"
            autosize
          />
        </div>
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

export default Dashboard;