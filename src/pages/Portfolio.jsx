import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Portfolio() {
  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const [wallet, setWallet] =
    useState({
      BTC: 0,
      ETH: 0,
      SOL: 0,
      USDT: 0,
    });

  const [prices, setPrices] =
    useState({
      BTC: 0,
      ETH: 0,
      SOL: 0,
    });

  const [
    transactions,
    setTransactions,
  ] = useState([]);

  useEffect(() => {
    fetchWallet();

    fetchPrices();

    fetchTransactions();

    const interval =
      setInterval(() => {
        fetchPrices();
      }, 10000);

    return () =>
      clearInterval(interval);
  }, []);

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

  /* PRICES */

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

  /* TRANSACTIONS */

  const fetchTransactions =
    async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } =
          await axios.get(
            "https://crypto-platform-backend-d2az.onrender.com/api/trade/transactions",
            config
          );

        setTransactions(data);
      } catch (error) {
        console.log(error);
      }
    };

  /* VALUES */

  const btcValue =
    wallet.BTC * prices.BTC;

  const ethValue =
    wallet.ETH * prices.ETH;

  const solValue =
    wallet.SOL * prices.SOL;

  const usdtValue =
    wallet.USDT;

  const totalPortfolio =
    btcValue +
    ethValue +
    solValue +
    usdtValue;

  /* INVESTED */

  const totalInvested =
    transactions
      .filter(
        (tx) =>
          tx.type === "BUY"
      )
      .reduce(
        (acc, tx) =>
          acc + tx.total,
        0
      );

  const profitLoss =
    totalPortfolio -
    totalInvested;

  /* CHART */

  const data = [
    {
      name: "BTC",
      value: btcValue,
    },

    {
      name: "ETH",
      value: ethValue,
    },

    {
      name: "SOL",
      value: solValue,
    },

    {
      name: "USDT",
      value: usdtValue,
    },
  ];

  const COLORS = [
    "#f7931a",
    "#627eea",
    "#14f195",
    "#26a17b",
  ];

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
          Portfolio Analytics
        </h1>

        <p>
          Advanced trading overview
        </p>

        {/* OVERVIEW */}

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
          {/* TOTAL */}

          <div style={card}>
            <h2>
              Portfolio Value
            </h2>

            <h1>
              $
              {totalPortfolio.toFixed(
                2
              )}
            </h1>
          </div>

          {/* INVESTED */}

          <div style={card}>
            <h2>
              Total Invested
            </h2>

            <h1>
              $
              {totalInvested.toFixed(
                2
              )}
            </h1>
          </div>

          {/* PROFIT */}

          <div style={card}>
            <h2>
              Profit / Loss
            </h2>

            <h1
              style={{
                color:
                  profitLoss >=
                  0
                    ? "#22c55e"
                    : "#ef4444",
              }}
            >
              $
              {profitLoss.toFixed(
                2
              )}
            </h1>
          </div>
        </div>

        {/* CHART */}

        <div
          style={{
            background:
              "#0f172a",
            padding: "30px",
            borderRadius:
              "20px",
            marginBottom:
              "30px",
            height: "400px",
          }}
        >
          <h2
            style={{
              marginBottom:
                "20px",
            }}
          >
            Asset Allocation
          </h2>

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={
                  120
                }
                dataKey="value"
                label
              >
                {data.map(
                  (
                    entry,
                    index
                  ) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
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
          <div style={card}>
            <h2>
              ₿ Bitcoin
            </h2>

            <h1>
              {wallet.BTC.toFixed(
                4
              )}{" "}
              BTC
            </h1>

            <p>
              $
              {btcValue.toFixed(
                2
              )}
            </p>
          </div>

          <div style={card}>
            <h2>
              ♦ Ethereum
            </h2>

            <h1>
              {wallet.ETH.toFixed(
                4
              )}{" "}
              ETH
            </h1>

            <p>
              $
              {ethValue.toFixed(
                2
              )}
            </p>
          </div>

          <div style={card}>
            <h2>
              ◎ Solana
            </h2>

            <h1>
              {wallet.SOL.toFixed(
                4
              )}{" "}
              SOL
            </h1>

            <p>
              $
              {solValue.toFixed(
                2
              )}
            </p>
          </div>

          <div style={card}>
            <h2>
              💵 USDT
            </h2>

            <h1>
              $
              {wallet.USDT.toFixed(
                2
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

/* STYLES */

const card = {
  background:
    "linear-gradient(135deg,#0f172a,#1e293b)",
  padding: "30px",
  borderRadius: "20px",
};

export default Portfolio;