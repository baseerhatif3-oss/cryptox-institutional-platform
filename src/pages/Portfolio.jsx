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

  useEffect(() => {
    fetchWallet();

    fetchPrices();

    const interval =
      setInterval(() => {
        fetchPrices();
      }, 10000);

    return () =>
      clearInterval(interval);
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

  /* CHART DATA */

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
          Portfolio
        </h1>

        <p>
          Live asset allocation
        </p>

        {/* TOTAL */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#0f172a,#1e293b)",
            padding: "40px",
            borderRadius:
              "25px",
            marginTop: "30px",
            marginBottom:
              "30px",
          }}
        >
          <h2>
            Total Portfolio Value
          </h2>

          <h1
            style={{
              fontSize: "55px",
              color: "#22c55e",
            }}
          >
            $
            {totalPortfolio.toFixed(
              2
            )}
          </h1>
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
            Portfolio Allocation
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
                      key={`cell-${index}`}
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