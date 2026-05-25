import {
  useState,
} from "react";

import {
  placeOrder,
} from "../services/orderService";

const TradingPanel = () => {

  const [side, setSide] =
    useState("buy");

  const [amount, setAmount] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const submitOrder =
    async () => {

      try {

        setLoading(true);

        await placeOrder({

          pair: "BTC/USDT",

          side,

          type: "market",

          amount:
            Number(amount),

          price: 84520,
        });

        alert(
          "Order executed successfully"
        );

        setAmount("");

      } catch (error) {

        console.log(error);

        alert(
          error?.response?.data?.message ||
          "Trading failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <h2 className="text-3xl font-black mb-8">
        Spot Trading
      </h2>

      <div className="flex gap-4 mb-6">

        <button
          onClick={() =>
            setSide("buy")
          }
          className={`flex-1 py-4 rounded-2xl font-bold transition-all ${
            side === "buy"
              ? "bg-green-500 text-black"
              : "bg-black text-white"
          }`}
        >
          Buy
        </button>

        <button
          onClick={() =>
            setSide("sell")
          }
          className={`flex-1 py-4 rounded-2xl font-bold transition-all ${
            side === "sell"
              ? "bg-red-500 text-white"
              : "bg-black text-white"
          }`}
        >
          Sell
        </button>

      </div>

      <div className="space-y-5">

        <input
          type="number"
          placeholder="BTC Amount"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
          className="w-full bg-black border border-yellow-500/10 rounded-2xl px-5 py-4 outline-none text-white"
        />

        <div className="bg-black rounded-2xl p-5 border border-yellow-500/10">

          <div className="flex justify-between mb-3">

            <span className="text-zinc-500">
              Market Price
            </span>

            <span>
              $84,520
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-zinc-500">
              Total
            </span>

            <span>

              $
              {
                amount
                  ? (
                      Number(amount) *
                      84520
                    ).toLocaleString()
                  : 0
              }

            </span>

          </div>

        </div>

        <button
          onClick={submitOrder}
          disabled={loading}
          className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
            side === "buy"
              ? "bg-green-500 text-black"
              : "bg-red-500 text-white"
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

    </div>
  );
};

export default TradingPanel;