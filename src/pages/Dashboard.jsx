import React, {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import API from "../services/api";

import TradingViewWidget from "../components/TradingViewWidget";

const Dashboard = () => {
  const [coin, setCoin] =
    useState("BTC");

  const [amount, setAmount] =
    useState("");

  const [prices, setPrices] =
    useState({
      BTC: 79000,
      ETH: 2200,
      SOL: 89,
    });

  /* FETCH LIVE PRICES */

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

  useEffect(() => {
    fetchPrices();

    const interval =
      setInterval(() => {
        fetchPrices();
      }, 10000);

    return () =>
      clearInterval(interval);
  }, []);

  /* BUY */

  const handleBuy =
    async () => {
      try {
        await API.post(
          "/trade",
          {
            coin,

            amount:
              Number(amount),

            type: "BUY",

            price:
              prices[coin],
          }
        );

        toast.success(
          "Buy order successful"
        );

        setAmount("");
      } catch (error) {
        console.log(error);

        toast.error(
          error?.response?.data
            ?.message ||
            "Buy failed"
        );
      }
    };

  /* SELL */

  const handleSell =
    async () => {
      try {
        await API.post(
          "/trade",
          {
            coin,

            amount:
              Number(amount),

            type: "SELL",

            price:
              prices[coin],
          }
        );

        toast.success(
          "Sell order successful"
        );

        setAmount("");
      } catch (error) {
        console.log(error);

        toast.error(
          error?.response?.data
            ?.message ||
            "Sell failed"
        );
      }
    };

  return (
    <div>
      {/* HEADER */}

      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          CryptoX Exchange
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Professional cryptocurrency
          trading platform
        </p>
      </div>

      {/* LIVE MARKET */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* BTC */}

        <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800">
          <h2 className="text-3xl font-bold">
            ₿ Bitcoin
          </h2>

          <p className="text-5xl font-bold mt-6">
            $
            {prices.BTC.toLocaleString()}
          </p>

          <p className="text-green-400 mt-4 text-xl">
            Live Market
          </p>
        </div>

        {/* ETH */}

        <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800">
          <h2 className="text-3xl font-bold">
            ♦ Ethereum
          </h2>

          <p className="text-5xl font-bold mt-6">
            $
            {prices.ETH.toLocaleString()}
          </p>

          <p className="text-green-400 mt-4 text-xl">
            Live Market
          </p>
        </div>

        {/* SOL */}

        <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800">
          <h2 className="text-3xl font-bold">
            ◎ Solana
          </h2>

          <p className="text-5xl font-bold mt-6">
            $
            {prices.SOL.toLocaleString()}
          </p>

          <p className="text-green-400 mt-4 text-xl">
            Live Market
          </p>
        </div>
      </div>

      {/* TRADING PANEL */}

      <div className="bg-[#0f172a] p-8 rounded-3xl border border-slate-800 mb-10">
        <h2 className="text-3xl font-bold mb-8">
          Trade Crypto
        </h2>

        <div className="space-y-5">
          {/* COIN SELECT */}

          <select
            value={coin}
            onChange={(e) =>
              setCoin(
                e.target.value
             