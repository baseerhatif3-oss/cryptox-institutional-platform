import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

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
          },

          ETH: {
            price:
              data[1]
                .current_price,

            change:
              data[1]
                .price_change_percentage_24h,
          },

          SOL: {
            price:
              data[2]
                .current_price,

            change:
              data[2]
                .price_change_percentage_24h,
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
          `${coin} Purchased`
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
          `${coin} Sold`
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
        }}
      >
        Loading...
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
          fontFamily: "Arial",
        }}
      >
        <h1>
          CryptoX Exchange
        </h1>

        <p>
          Welcome {user.name}
        </p>

        {/* MARKET */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
            marginBottom:
              "30px",
          }}
        >
          <div style={card}>
            <h2>
              ₿ Bitcoin
            </h2>

            <h1>
              $
              {
                prices.BTC
                  .price
              }
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
              {
                prices.BTC
                  .change
              }
              %
            </p>
          </div>

          <div style={card}>
            <h2>
              ♦ Ethereum
            </h2>

            <h1>
              $
              {
                prices.ETH
                  .price
              }
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
              {
                prices.ETH
                  .change
              }
              %
            </p>
          </div>

          <div style={card}>
            <h2>
              ◎ Solana
            </h2>

            <h1>
              $
              {
                prices.SOL
                  .price
              }
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
              {
                prices.SOL
                  .change
              }
              %
            </p>
          </div>
        </div>

        {/* TRADE */}

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
              onClick={
                buyCoin
              }
              style={buyBtn}
            >
              Buy
            </button>

            <button
              onClick={
                sellCoin
              }
              style={sellBtn}
            >
              Sell
            </button>
          </div>
        </div>

        {/* CHART */}

        <div
          style={{
            background:
              "#0f172a",
            borderRadius:
              "20px",
            overflow:
              "hidden",
          }}
        >
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview&symbol=BINANCE:BTCUSDT&interval=60&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark"
            width="100%"
            height="500"
            frameBorder="0"
          />
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

const input = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "none",
  marginBottom: "20px",
  background: "#1e293b",
  color: "white",
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