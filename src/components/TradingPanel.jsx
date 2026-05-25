import { useState } from "react";

import {
  placeOrder,
} from "../services/orderService";

export default function TradingPanel() {

  const [side, setSide] =
    useState("buy");

  const [orderType, setOrderType] =
    useState("market");

  const [price, setPrice] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleOrder =
    async () => {

      try {

        setLoading(true);

        await placeOrder({

          pair: "BTC/USDT",

          side,

          type:
            orderType,

          amount:
            Number(amount),

          price:
            Number(price),
        });

        alert(
          "Order placed successfully"
        );

        setAmount("");

        setPrice("");

      } catch (error) {

        alert(
          error.response?.data
            ?.message ||
            "Order failed"
        );
      }

      setLoading(false);
    };

  return (

    <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Spot Trading
      </h2>

      <div className="flex gap-4 mb-6">

        <button
          onClick={() =>
            setSide("buy")
          }
          className={`flex-1 py-3 rounded-2xl font-bold ${
            side === "buy"
              ? "bg-green-500 text-white"
              : "bg-black border border-gray-700"
          }`}
        >
          Buy
        </button>

        <button
          onClick={() =>
            setSide("sell")
          }
          className={`flex-1 py-3 rounded-2xl font-bold ${
            side === "sell"
              ? "bg-red-500 text-white"
              : "bg-black border border-gray-700"
          }`}
        >
          Sell
        </button>

      </div>

      <select
        value={orderType}
        onChange={(e) =>
          setOrderType(
            e.target.value
          )
        }
        className="w-full bg-black border border-gray-700 rounded-2xl px-4 py-4 mb-4"
      >

        <option value="market">
          Market Order
        </option>

        <option value="limit">
          Limit Order
        </option>

      </select>

      {
        orderType ===
          "limit" && (

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            className="w-full mb-4 bg-black border border-gray-700 rounded-2xl px-4 py-4"
          />
        )
      }

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(
            e.target.value
          )
        }
        className="w-full mb-6 bg-black border border-gray-700 rounded-2xl px-4 py-4"
      />

      <button
        onClick={handleOrder}
        disabled={loading}
        className={`w-full py-4 rounded-2xl font-bold ${
          side === "buy"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >

        {
          loading
            ? "Processing..."
            : side === "buy"
            ? "Buy BTC"
            : "Sell BTC"
        }

      </button>

    </div>
  );
}