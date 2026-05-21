import React, {
  useEffect,
  useState,
} from "react";

import {
  AdvancedRealTimeChart,
} from "react-ts-tradingview-widgets";

import API from "../services/api";

import socket from "../socket/socket";

const Trading =
  () => {
    const [
      prices,
      setPrices,
    ] = useState({});

    const [
      coin,
      setCoin,
    ] = useState("BTC");

    const [
      amount,
      setAmount,
    ] = useState("");

    const [
      loading,
      setLoading,
    ] = useState(false);

    const [
      message,
      setMessage,
    ] = useState("");

    useEffect(() => {
      socket.on(
        "market_update",
        (
          data
        ) => {
          setPrices(data);
        }
      );

      return () => {
        socket.off(
          "market_update"
        );
      };
    }, []);

    const executeTrade =
      async (
        type
      ) => {
        try {
          setLoading(
            true
          );

          setMessage("");

          const price =
            prices[
              coin
            ];

          const res =
            await API.post(
              "/trade",
              {
                type,

                coin,

                amount:
                  Number(
                    amount
                  ),

                price,
              }
            );

          setMessage(
            `${type} order executed successfully`
          );

          console.log(
            res.data
          );
        } catch (error) {
          setMessage(
            error.response
              ?.data
              ?.message ||
              "Trade failed"
          );
        } finally {
          setLoading(
            false
          );
        }
      };

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            Trading Terminal
          </h1>

          <p className="text-gray-400 mt-2">
            Live professional trading interface
          </p>
        </div>

        {/* CHART */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
          <AdvancedRealTimeChart
            theme="dark"
            symbol={`BINANCE:${coin}USDT`}
            width="100%"
            height={600}
            timezone="Etc/UTC"
            locale="en"
            hide_top_toolbar={false}
            hide_legend={false}
            save_image={true}
            interval="15"
            range="12M"
            allow_symbol_change={true}
          />
        </div>

        {/* LIVE PRICES */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(
            prices
          ).map(
            (
              [
                symbol,
                value,
              ]
            ) => (
              <button
                key={
                  symbol
                }
                onClick={() =>
                  setCoin(
                    symbol
                  )
                }
                className={`rounded-2xl p-5 border transition ${
                  coin ===
                  symbol
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-[#111] border-gray-800 text-white"
                }`}
              >
                <h2 className="text-xl font-bold">
                  {symbol}
                </h2>

                <p className="mt-3 text-2xl font-bold">
                  $
                  {Number(
                    value
                  ).toLocaleString()}
                </p>
              </button>
            )
          )}
        </div>

        {/* TRADE PANEL */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Execute Trade
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              value={coin}
              readOnly
              className="bg-black border border-gray-700 rounded-xl px-4 py-4"
            />

            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(
                e
              ) =>
                setAmount(
                  e.target
                    .value
                )
              }
              className="bg-black border border-gray-700 rounded-xl px-4 py-4"
            />

            <input
              type="text"
              value={`$${prices[
                coin
              ]?.toLocaleString()}`}
              readOnly
              className="bg-black border border-gray-700 rounded-xl px-4 py-4"
            />
          </div>

          {/* BUTTONS */}

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              disabled={
                loading
              }
              onClick={() =>
                executeTrade(
                  "BUY"
                )
              }
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 rounded-xl text-lg"
            >
              {loading
                ? "Processing..."
                : "BUY"}
            </button>

            <button
              disabled={
                loading
              }
              onClick={() =>
                executeTrade(
                  "SELL"
                )
              }
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl text-lg"
            >
              {loading
                ? "Processing..."
                : "SELL"}
            </button>
          </div>

          {/* MESSAGE */}

          {message && (
            <div className="mt-6 bg-black border border-gray-800 rounded-xl p-4 text-center">
              {message}
            </div>
          )}
        </div>
      </div>
    );
  };

export default Trading;