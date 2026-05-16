import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const Wallet = () => {
  const [balance, setBalance] =
    useState(0);

  const [portfolio, setPortfolio] =
    useState({});

  const fetchWallet =
    async () => {
      try {
        // BALANCE

        const balanceRes =
          await API.get(
            "/balance"
          );

        setBalance(
          balanceRes.data.balance
        );

        // TRADES

        const tradesRes =
          await API.get(
            "/trades"
          );

        const holdings = {};

        tradesRes.data.forEach(
          (trade) => {
            if (
              !holdings[
                trade.coin
              ]
            ) {
              holdings[
                trade.coin
              ] = 0;
            }

            if (
              trade.type ===
              "BUY"
            ) {
              holdings[
                trade.coin
              ] +=
                trade.amount;
            } else {
              holdings[
                trade.coin
              ] -=
                trade.amount;
            }
          }
        );

        setPortfolio(
          holdings
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchWallet();

    const interval =
      setInterval(() => {
        fetchWallet();
      }, 5000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HEADER */}

      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Wallet
        </h1>

        <p className="text-slate-400 mt-3">
          Live wallet balances and
          holdings
        </p>
      </div>

      {/* BALANCE */}

      <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 mb-10">
        <h2 className="text-2xl text-slate-400">
          Available Balance
        </h2>

        <h1 className="text-6xl font-bold mt-5 text-green-400">
          $
          {balance.toLocaleString()}
        </h1>
      </div>

      {/* HOLDINGS */}

      <div className="grid md:grid-cols-3 gap-6">
        {Object.keys(
          portfolio
        ).map((coin) => (
          <div
            key={coin}
            className="bg-slate-900 p-8 rounded-3xl border border-slate-800"
          >
            <h2 className="text-3xl font-bold">
              {coin}
            </h2>

            <p className="text-5xl font-bold mt-6 text-blue-400">
              {
                portfolio[
                  coin
                ]
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;