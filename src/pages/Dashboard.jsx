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

  const [news, setNews] =
    useState([]);

  const [global, setGlobal] =
    useState(null);

  const [amount, setAmount] =
    useState("");

  const [coin, setCoin] =
    useState("BTC");

  useEffect(() => {
    fetchPrices();

    fetchWallet();

    fetchNews();

    fetchGlobal();

    const interval =
      setInterval(() => {
        fetchPrices();

        fetchGlobal();
      }, 10000);

    return () =>
      clearInterval(interval);
  }, []);

  /* MARKET */

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

  /* GLOBAL */

  const fetchGlobal =
    async () => {
      try {
        const response =
          await fetch(
            "https://api.coingecko.com/api/v3/global"
          );

        const data =
          await response.json();

        setGlobal(
          data.data
        );
      } catch (error) {
        console.log(error);
      }
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

  /* NEWS */

  const fetchNews =
    async () => {
      setNews([
        {
          title:
            "Bitcoin Surges Above Key Resistance",
        },

        {
          title:
            "Ethereum ETF Optimism Grows",
        },

        {
          title:
            "Solana Trading Volume Explodes",
        },
      ]);
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

  /* SYMBOL */

  const getSymbol =
    () => {
      if (coin === "BTC")
        return "BINANCE:BTCUSDT";

      if (coin === "ETH")
        return "BINANCE:ETHUSDT";

      if (coin === "SOL")
        return "BINANCE:SOLUSDT";

      return "BINANCE:BTCUSDT";
    };

  /* CHART */

  useEffect(() => {
    const script =
      document.createElement(
        "script"
      );

    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";

    script.type =
      "text/javascript";

    script.async = true;

    script.innerHTML =
      JSON.stringify({
        autosize: true,

        symbol:
          getSymbol(),

        interval: "15",

        timezone:
          "Etc/UTC",

        theme: "dark",

        style: "1",

        locale: "en",

        enable_publishing: false,

        allow_symbol_change: true,

        calendar: false,

        support_host:
          "https://www.tradingview.com",
      });

    const chart =
      document.getElementById(
        "tradingview_chart"
      );

    chart.innerHTML = "";

    chart.appendChild(
      script
    );
  }, [coin]);

  if (
    prices.BTC === null ||
    !global
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
        {/* GLOBAL */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#0f172a,#1e293b)",
            padding: "20px",
            borderRadius:
              "20px",
            marginBottom:
              "30px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <div>
            <p>
              Market Cap
            </p>

            <h2>
              $
              {Math.floor(
                global
                  .total_market_cap
                  .usd /
                  1000000000
              )}
              B
            </h2>
          </div>

          <div>
            <p>
              24h Volume
            </p>

            <h2>
              $
              {Math.floor(
                global
                  .total_volume
                  .usd /
                  1000000000
              )}
              B
            </h2>
          </div>

          <div>
            <p>
              BTC Dominance
            </p>

            <h2>
              {global.market_cap_percentage.btc.toFixed(
                2
              )}
              %
            </h2>
          </div>

          <div>
            <p>
              Active Coins
            </p>

            <h2>
              {
                global.active_cryptocurrencies
              }
            </h2>
          </div>
        </div>

        {/* HEADER */}

        <h1>
          Advanced Trading Terminal
        </h1>

        <p>
          Professional crypto exchange dashboard
        </p>

        {/* COINS */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
            marginBottom:
              "30px",
            flexWrap: "wrap",
          }}
        >
          {["BTC", "ETH", "SOL"].map(
            (c) => (
              <button
                key={c}
                onClick={() =>
                  setCoin(c)
                }
                style={{
                  padding:
                    "14px 24px",
                  borderRadius:
                    "12px",
                  border: "none",
                  cursor:
                    "pointer",
                  background:
                    coin === c
                      ? "#2563eb"
                      : "#1e293b",
                  color:
                    "white",
                  fontWeight:
                    "bold",
                }}
              >
                {c}
              </button>
            )
          )}
        </div>

        {/* ACTIVE */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#0f172a,#1e293b)",
            padding: "30px",
            borderRadius:
              "25px",
            marginBottom:
              "30px",
          }}
        >
          <h1>
            {coin}
          </h1>

          <h2>
            $
            {
              prices[coin]
                .price
            }
          </h2>

          <p
            style={{
              color:
                prices[coin]
                  .change >=
                0
                  ? "#22c55e"
                  : "#ef4444",
              fontWeight:
                "bold",
            }}
          >
            {
              prices[coin]
                .change
            }
            %
          </p>

          <p>
            Holdings:{" "}
            {wallet[
              coin
            ].toFixed(4)}
          </p>
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
            Trade {coin}
          </h2>

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

        {/* NEWS */}

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
            Market News
          </h2>

          <div
            style={{
              display: "grid",
              gap: "15px",
              marginTop:
                "20px",
            }}
          >
            {news.map(
              (
                item,
                index
              ) => (
                <div
                  key={index}
                  style={{
                    background:
                      "#1e293b",
                    padding:
                      "20px",
                    borderRadius:
                      "12px",
                  }}
                >
                  {item.title}
                </div>
              )
            )}
          </div>
        </div>

        {/* ADVANCED CHART */}

        <div
          style={{
            background:
              "#0f172a",
            padding: "20px",
            borderRadius:
              "20px",
            height: "700px",
          }}
        >
          <div
            id="tradingview_chart"
            style={{
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* STYLES */

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