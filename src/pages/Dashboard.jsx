import { useEffect, useState } from "react";

import TradingViewWidget from "react-tradingview-widget";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const [btcPrice, setBtcPrice] =
    useState(0);

  const [ethPrice, setEthPrice] =
    useState(0);

  const [btcChange, setBtcChange] =
    useState(0);

  const [ethChange, setEthChange] =
    useState(0);

  useEffect(() => {
    fetchMarketData();
  }, []);

  const fetchMarketData =
    async () => {
      try {
        const response =
          await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
          );

        const data =
          await response.json();

        setBtcPrice(
          data.bitcoin.usd
        );

        setEthPrice(
          data.ethereum.usd
        );

        setBtcChange(
          data.bitcoin
            .usd_24h_change
        );

        setEthChange(
          data.ethereum
            .usd_24h_change
        );
      } catch (error) {
        console.log(error);
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
      {/* TOP BAR */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div>
          <h1>
            Crypto Dashboard
          </h1>

          <p>
            Welcome back,{" "}
            {user?.name}
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem(
              "userInfo"
            );

            window.location.href =
              "/";
          }}
          style={{
            background:
              "#dc2626",
            border: "none",
            padding:
              "12px 20px",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* MARKET CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {/* BTC */}

        <div style={card}>
          <h2>Bitcoin</h2>

          <h1>
            $
            {btcPrice.toLocaleString()}
          </h1>

          <p
            style={{
              color:
                btcChange > 0
                  ? "#22c55e"
                  : "#ef4444",
            }}
          >
            {btcChange.toFixed(
              2
            )}
            %
          </p>
        </div>

        {/* ETH */}

        <div style={card}>
          <h2>Ethereum</h2>

          <h1>
            $
            {ethPrice.toLocaleString()}
          </h1>

          <p
            style={{
              color:
                ethChange > 0
                  ? "#22c55e"
                  : "#ef4444",
            }}
          >
            {ethChange.toFixed(
              2
            )}
            %
          </p>
        </div>

        {/* PORTFOLIO */}

        <div style={card}>
          <h2>Portfolio</h2>

          <h1>$12,450</h1>

          <p
            style={{
              color: "#22c55e",
            }}
          >
            +12.4%
          </p>
        </div>
      </div>

      {/* CHART */}

      <div
        style={{
          background: "#0f172a",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <TradingViewWidget
          symbol="BINANCE:BTCUSDT"
          theme="dark"
          locale="en"
          autosize
        />
      </div>
    </div>
  );
}

const card = {
  background: "#0f172a",
  padding: "25px",
  borderRadius: "20px",
};

export default Dashboard;