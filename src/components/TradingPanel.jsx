import { useState } from "react";

export default function TradingPanel() {

  const [side, setSide] = useState("buy");

  const [orderType, setOrderType] = useState("market");

  const [price, setPrice] = useState("");

  const [amount, setAmount] = useState("");

  return (

    <div className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Spot Trading
      </h2>

      <div className="flex gap-4 mb-6">

        <button
          onClick={() => setSide("buy")}
          className={`flex-1 py-3 rounded-2xl font-bold ${
            side === "buy"
              ? "bg-green-500 text-white"
              : "bg-black border border-gray-700"
          }`}
        >
          Buy
        </button>

        <button
          onClick={() => setSide("sell")}
          className={`flex-1 py-3 rounded-2xl font-bold ${
            side === "sell"
              ? "bg-red-500 text-white"
              : "bg-black border border-gray-700"
          }`}
        >
          Sell
        </button>

      </div>

      <div className="mb-4">

        <select
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="w-full bg-black border border-gray-700 rounded-2xl px-4 py-4"
        >
          <option value="market">
            Market Order
          </option>

          <option value="limit">
            Limit Order
          </option>

        </select>

      </div>

      {
        orderType === "limit" && (
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mb-4 bg-black border border-gray-700 rounded-2xl px-4 py-4"
          />
        )
      }

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-6 bg-black border border-gray-700 rounded-2xl px-4 py-4"
      />

      <div className="space-y-3 mb-6">

        <div className="flex justify-between">
          <span className="text-gray-400">
            Pair
          </span>

          <span>
            BTC/USDT
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Type
          </span>

          <span className="capitalize">
            {orderType}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Amount
          </span>

          <span>
            {amount || 0}
          </span>
        </div>

      </div>

      <button
        className={`w-full py-4 rounded-2xl font-bold ${
          side === "buy"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        {side === "buy" ? "Buy BTC" : "Sell BTC"}
      </button>

    </div>
  );
}