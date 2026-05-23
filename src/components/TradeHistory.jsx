import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const TradeHistory = () => {

  const [trades, setTrades] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );



  /*
  ==========================================
  FETCH TRADES
  ==========================================
  */

  useEffect(() => {
    fetchTrades();
  }, []);

  const fetchTrades =
    async () => {
      try {

        const res =
          await axios.get(
            `${API}/spot/history/${user.id}`
          );

        setTrades(
          res.data.trades || []
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };



  /*
  ==========================================
  LOADING
  ==========================================
  */

  if (loading) {
    return (
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold">
          Loading Trade History...
        </h2>
      </div>
    );
  }



  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            Trade History
          </h2>

          <p className="text-gray-400 mt-2">
            Recent trading activity
          </p>

        </div>

        <button
          onClick={fetchTrades}
          className="bg-yellow-500 hover:bg-yellow-600 transition px-5 py-3 rounded-xl font-semibold text-black"
        >
          Refresh
        </button>

      </div>



      {trades.length === 0 ? (

        <div className="text-center py-10 text-gray-500">
          No trades yet
        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-gray-800">

                <th className="text-left py-4">
                  Pair
                </th>

                <th className="text-left py-4">
                  Side
                </th>

                <th className="text-left py-4">
                  Price
                </th>

                <th className="text-left py-4">
                  Quantity
                </th>

                <th className="text-left py-4">
                  Total
                </th>

                <th className="text-left py-4">
                  Fee
                </th>

                <th className="text-left py-4">
                  Time
                </th>

              </tr>

            </thead>

            <tbody>

              {trades.map(
                (trade) => (

                  <tr
                    key={trade._id}
                    className="border-b border-gray-900"
                  >

                    <td className="py-4">
                      {trade.symbol}
                    </td>

                    <td
                      className={`py-4 font-bold ${
                        trade.side ===
                        "BUY"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {trade.side}
                    </td>

                    <td className="py-4">
                      $
                      {Number(
                        trade.price
                      ).toLocaleString()}
                    </td>

                    <td className="py-4">
                      {trade.quantity}
                    </td>

                    <td className="py-4">
                      $
                      {Number(
                        trade.total
                      ).toLocaleString()}
                    </td>

                    <td className="py-4">
                      $
                      {Number(
                        trade.fee
                      ).toFixed(2)}
                    </td>

                    <td className="py-4 text-gray-400">
                      {new Date(
                        trade.createdAt
                      ).toLocaleString()}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
};

export default TradeHistory;