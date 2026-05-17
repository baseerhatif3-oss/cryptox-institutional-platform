import { useEffect, useState } from "react";
import API from "../services/api";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [amount, setAmount] = useState(100);
  const [loading, setLoading] = useState(false);

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

  const handleTrade = async (type) => {
    try {
      if (!selectedCoin) return;

      setLoading(true);

      await API.post("/trade", {
        coinId: selectedCoin.id,
        coinName: selectedCoin.name,
        symbol: selectedCoin.symbol,
        image: selectedCoin.image,
        type,
        amount: Number(amount),
      });

      toast.success(
        type === "BUY"
          ? "Crypto purchased successfully"
          : "Crypto sold successfully"
      );

      fetchBalance();
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Trade failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-slate-950 min-h-screen text-white">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-400 mt-2">
          Welcome to your crypto exchange dashboard.
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Wallet Balance
        </h2>

        <p className="text-4xl font-bold text-green-400">
          ${balance.toFixed(2)}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold mb-4">
            Live Market
          </h2>

          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {coins.map((coin) => (
              <div
                key={coin.id}
                onClick={() => setSelectedCoin(coin)}
                className="flex items-center justify-between bg-slate-800 p-4 rounded-xl cursor-pointer hover:bg-slate-700"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-8 h-8"
                  />

                  <div>
                    <p className="font-semibold">{coin.name}</p>
                    <p className="text-slate-400 text-sm uppercase">
                      {coin.symbol}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-bold">
                    ${coin.current_price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 h-fit">
          <h2 className="text-xl font-semibold mb-4">
            Trade Crypto
          </h2>

          {selectedCoin && (
            <div className="mb-4 flex items-center gap-3">
              <img
                src={selectedCoin.image}
                alt={selectedCoin.name}
                className="w-10 h-10"
              />

              <div>
                <p className="font-semibold">
                  {selectedCoin.name}
                </p>
                <p className="text-slate-400 uppercase text-sm">
                  {selectedCoin.symbol}
                </p>
              </div>
            </div>
          )}

          <input
            type="number"
            placeholder="Amount in USD"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none mb-4"
          />

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleTrade("BUY")}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 p-3 rounded-lg font-semibold"
            >
              Buy
            </button>

            <button
              onClick={() => handleTrade("SELL")}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 p-3 rounded-lg font-semibold"
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;