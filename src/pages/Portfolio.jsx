import React, {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const Portfolio = () => {
  const [portfolio, setPortfolio] =
    useState({});

  const fetchPortfolio =
    async () => {
      try {
        const { data } =
          await API.get(
            "/trades"
          );

        const holdings = {};

        data.forEach((trade) => {
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
        });

        setPortfolio(
          holdings
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Portfolio
        </h1>

        <p className="text-slate-400 mt-3">
          Your real holdings
        </p>
      </div>

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

            <p className="text-5xl font-bold mt-6 text-green-400">
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

export default Portfolio;