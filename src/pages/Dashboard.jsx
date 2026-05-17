import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../services/api";

import TradingChart from "../components/TradingChart";
import LiveMarket from "../components/LiveMarket";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);

  const [coins, setCoins] = useState([]);

  const [selectedCoin, setSelectedCoin] =
    useState(null);

  const [amount, setAmount] = useState(100);

  const [orderType, setOrderType] =
    useState("MARKET");

  const [targetPrice, setTargetPrice] =
    useState("");

  const fetchBalance = async () => {
    try {
      const { data } = await API.get("/balance");
      setBalance(data.balance);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCoins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );

      const data = await response.json();

      setCoins(data.slice(0, 20));
      setSelectedCoin(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBalance();
    fetchCoins();
  }, []);

  const handleMarketTrade = async (
    type
  ) => {
    try {
      await API.post("/trade", {
        coinId: selectedCoin.id,
        coinName: selectedCoin.name,
        symbol: selectedCoin.symbol,
        image: selectedCoin.image,
        type,
        amount: Number(amount),
      });

      toast.success(
        `${type} order executed`
      );

      fetchBalance();
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Trade failed"
      );
    }
  };

  const handleLimitOrder = async (
    type
  ) => {
    try {
      await API.post("/orders", {
        coinId: selectedCoin.id,
        coinName: selectedCoin.name,
        symbol: selectedCoin.symbol,
        image: selectedCoin.image,
        type,
        amount: Number(amount),
        targetPrice:
          Number(targetPrice),
      });

      toast.success(
        "Limit order created"
      );
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Order failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Exchange Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Professional crypto trading
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">
              Wallet Balance
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              ${balance.toFixed(2)}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">
              Active Assets
            </p>

            <h2 className="text-4xl font-bold">
              {coins.length}
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 mb-2">
              Exchange Status
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              Online
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-3 space-y-6">
            <TradingChart />

            <LiveMarket />
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit">
            <h3 className="text-2xl font-semibold mb-6">
              Trade Panel
            </h3>

            <div className="flex gap-2 mb-4">
              <button
                onClick={() =>
                  setOrderType("MARKET")
                }
                className={`flex-1 py-2 rounded-xl ${
                  orderType === "MARKET"
                    ? "bg-blue-600"
                    : "bg-slate-800"
                }`}
              >
                Market
              </button>

              <button
                onClick={() =>
                  setOrderType("LIMIT")
                }
                className={`flex-1 py-2 rounded-xl ${
                  orderType === "LIMIT"
                    ? "bg-blue-600"
                    : "bg-slate-800"
                }`}
              >
                Limit
              </button>
            </div>

            {selectedCoin && (
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={selectedCoin.image}
                  alt={selectedCoin.name}
                  className="w-12 h-12"
                />

                <div>
                  <h4 className="font-bold">
                    {selectedCoin.name}
                  </h4>

                  <p className="text-slate-400 uppercase text-sm">
                    {selectedCoin.symbol}
                  </p>
                </div>
              </div>
            )}

            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              className="w-full bg-slate-800 p-4 rounded-xl outline-none mb-4"
              placeholder="Amount in USD"
            />

            {orderType === "LIMIT" && (
              <input
                type="number"
                value={targetPrice}
                onChange={(e) =>
                  setTargetPrice(
                    e.target.value
                  )
                }
                className="w-full bg-slate-800 p-4 rounded-xl outline-none mb-4"
                placeholder="Target Price"
              />
            )}

            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() =>
                  orderType === "MARKET"
                    ? handleMarketTrade(
                        "BUY"
                      )
                    : handleLimitOrder(
                        "BUY"
                      )
                }
                className="bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold"
              >
                Buy
              </button>

              <button
                onClick={() =>
                  orderType === "MARKET"
                    ? handleMarketTrade(
                        "SELL"
                      )
                    : handleLimitOrder(
                        "SELL"
                      )
                }
                className="bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
              >
                Sell
              </button>
            </div>

            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {coins.map((coin) => (
                <div
                  key={coin.id}
                  onClick={() =>
                    setSelectedCoin(coin)
                  }
                  className="bg-slate-800 hover:bg-slate-700 p-3 rounded-xl cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-8 h-8"
                    />

                    <div>
                      <p className="font-semibold">
                        {coin.name}
                      </p>

                      <p className="text-slate-400 text-xs uppercase">
                        {coin.symbol}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">
                      ${coin.current_price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;