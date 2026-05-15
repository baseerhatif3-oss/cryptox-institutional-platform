import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

function Wallet() {
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
        <h1>Wallet</h1>

        <p>
          Manage your crypto assets
        </p>

        {/* ASSETS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {/* BTC */}

          <div style={card}>
            <div
              style={icon}
            >
              ₿
            </div>

            <h2>
              Bitcoin
            </h2>

            <h1>
              {wallet.BTC.toFixed(
                4
              )}{" "}
              BTC
            </h1>

            <p>
              $
              {(
                wallet.BTC *
                prices.BTC
              ).toFixed(2)}
            </p>
          </div>

          {/* ETH */}

          <div style={card}>
            <div
              style={icon}
            >
              ♦
            </div>

            <h2>
              Ethereum
            </h2>

            <h1>
              {wallet.ETH.toFixed(
                4
              )}{" "}
              ETH
            </h1>

            <p>
              $
              {(
                wallet.ETH *
                prices.ETH
              ).toFixed(2)}
            </p>
          </div>

          {/* SOL */}

          <div style={card}>
            <div
              style={icon}
            >
              ◎
            </div>

            <h2>
              Solana
            </h2>

            <h1>
              {wallet.SOL.toFixed(
                4
              )}{" "}
              SOL
            </h1>

            <p>
              $
              {(
                wallet.SOL *
                prices.SOL
              ).toFixed(2)}
            </p>
          </div>

          {/* USDT */}

          <div style={card}>
            <div
              style={icon}
            >
              💵
            </div>

            <h2>USDT</h2>

            <h1>
              $
              {wallet.USDT.toFixed(
                2
              )}
            </h1>

            <p>
              Stablecoin Balance
            </p>
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
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.3)",
};

const icon = {
  fontSize: "45px",
  marginBottom: "15px",
};

export default Wallet;