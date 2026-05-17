import { useEffect, useState } from "react";
import API from "../services/api";

const Wallet = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const { data } = await API.get("/balance");
        setBalance(data.balance);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="p-6 bg-slate-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Wallet</h1>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 max-w-xl">
        <h2 className="text-xl font-semibold mb-3">
          Available Balance
        </h2>

        <p className="text-5xl font-bold text-green-400">
          ${balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Wallet;