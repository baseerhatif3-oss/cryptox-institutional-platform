import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const SpotTrading = () => {
  const [symbol, setSymbol] =
    useState("BTCUSDT");

  const [quantity, setQuantity] =
    useState("");

  const [prices, setPrices] =
    useState({});

  const [loading, setLoading] =
    useState(false);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  /* =========================
     FETCH PRICES
  ========================= */

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices =
    async () => {
      try {
        const res =
          await axios.get(
            `${API}/spot/prices`
          );

        setPrices(
          res.data.prices
        );
      } catch (error) {
        console.log(error);
      }
    };

  /* =========================
     BUY
  ========================= */

  const handleBuy =
    async () => {
      try {
        setLoading(true);

        const res =
          await axios.post(
            `${API}/spot/buy`,
            {
              userId:
                user.id,

              symbol,

              quantity,
            }
          );

        alert(
          res.data.message
        );

        setQuantity("");
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Buy failed"
        );
      } finally {
        setLoading(false);
      }
    };

  /* =========================
     SELL
  ========================= */

  const handleSell =
    async () => {
      try {
        setLoading(true);

        const res =
          await axios.post(
            `${API}/spot/sell`,
            {
              userId:
                user.id,

              symbol,

              quantity,
            }
          );

        alert(
          res.data.message
        );

        setQuantity("");
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Sell failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-8">
          Spot Trading
        </h1>

        {/* SYMBOL */}

        <div className="mb-6">
          <label className="block mb-2 text-gray-400">
            Trading Pair
          </label>

          <select
            value={symbol}
            onChange={(e) =>
              setSymbol(
                e.target.value
              )
            }
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
          >
            <option>
              BTCUSDT
            </option>

            <option>
              ETHUSDT
            </option>

            <option>
              SOLUSDT
            </option>

            <option>
              XRPUSDT
            </option>
          </select>
        </div>

        {/* PRICE */}

        <div className="mb-6">
          <p className="text-gray-400">
            Current Price
          </p>

          <h2 className="text-3xl font-bold mt-2">
            $
            {prices[
              symbol
            ] || 0}
          </h2>
        </div>

        {/* QUANTITY */}

        <div className="mb-8">
          <label className="block mb-2 text-gray-400">
            Quantity
          </label>

          <input
            type="number"
            placeholder="0.00"
            value={quantity}
            onChange={(e) =>
              setQuantity(
                e.target.value
              )
            }
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
          />
        </div>

        {/* BUTTONS */}

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={
              handleBuy
            }
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 transition rounded-xl py-4 font-bold"
          >
            {loading
              ? "Processing..."
              : "BUY"}
          </button>

          <button
            onClick={
              handleSell
            }
            disabled={loading}
            className="bg-red-500 hover:bg-red-600 transition rounded-xl py-4 font-bold"
          >
            {loading
              ? "Processing..."
              : "SELL"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotTrading;