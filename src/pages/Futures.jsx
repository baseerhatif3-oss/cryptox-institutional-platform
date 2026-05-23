import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const Futures = () => {

  const [symbol, setSymbol] =
    useState("BTCUSDT");

  const [side, setSide] =
    useState("LONG");

  const [margin, setMargin] =
    useState("");

  const [leverage, setLeverage] =
    useState(10);

  const [positions, setPositions] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );



  /*
  ==========================================
  FETCH POSITIONS
  ==========================================
  */

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions =
    async () => {
      try {

        const res =
          await axios.get(
            `${API}/futures/${user.id}`
          );

        setPositions(
          res.data.positions || []
        );

      } catch (error) {

        console.log(error);
      }
    };



  /*
  ==========================================
  OPEN POSITION
  ==========================================
  */

  const openPosition =
    async () => {
      try {

        setLoading(true);

        const res =
          await axios.post(
            `${API}/futures/open`,
            {
              userId:
                user.id,

              symbol,

              side,

              margin,

              leverage,
            }
          );

        alert(
          res.data.message
        );

        setMargin("");

        fetchPositions();

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Failed"
        );

      } finally {

        setLoading(false);
      }
    };



  /*
  ==========================================
  CLOSE POSITION
  ==========================================
  */

  const closePosition =
    async (id) => {
      try {

        await axios.post(
          `${API}/futures/close/${id}`
        );

        fetchPositions();

      } catch (error) {

        console.log(error);
      }
    };



  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div>

        <h1 className="text-4xl font-bold">
          Futures Trading
        </h1>

        <p className="text-gray-400 mt-2">
          Trade perpetual futures with leverage
        </p>

      </div>



      {/* FUTURES FORM */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Open Position
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* SYMBOL */}

          <div>

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

            </select>

          </div>



          {/* SIDE */}

          <div>

            <label className="block mb-2 text-gray-400">
              Position Side
            </label>

            <select
              value={side}
              onChange={(e) =>
                setSide(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
            >

              <option>
                LONG
              </option>

              <option>
                SHORT
              </option>

            </select>

          </div>



          {/* MARGIN */}

          <div>

            <label className="block mb-2 text-gray-400">
              Margin (USDT)
            </label>

            <input
              type="number"
              placeholder="100"
              value={margin}
              onChange={(e) =>
                setMargin(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
            />

          </div>



          {/* LEVERAGE */}

          <div>

            <label className="block mb-2 text-gray-400">
              Leverage
            </label>

            <select
              value={leverage}
              onChange={(e) =>
                setLeverage(
                  e.target.value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
            >

              <option value={5}>
                5x
              </option>

              <option value={10}>
                10x
              </option>

              <option value={25}>
                25x
              </option>

              <option value={50}>
                50x
              </option>

            </select>

          </div>

        </div>



        {/* BUTTON */}

        <button
          onClick={openPosition}
          disabled={loading}
          className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-xl text-black font-bold"
        >

          {loading
            ? "Opening..."
            : "Open Position"}

        </button>

      </div>



      {/* POSITIONS */}

      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Open Positions
        </h2>

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
                  Margin
                </th>

                <th className="text-left py-4">
                  Leverage
                </th>

                <th className="text-left py-4">
                  Status
                </th>

                <th className="text-left py-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {positions.map(
                (position) => (

                  <tr
                    key={position._id}
                    className="border-b border-gray-900"
                  >

                    <td className="py-4">
                      {
                        position.symbol
                      }
                    </td>

                    <td
                      className={`py-4 font-bold ${
                        position.side ===
                        "LONG"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {
                        position.side
                      }
                    </td>

                    <td className="py-4">
                      $
                      {
                        position.margin
                      }
                    </td>

                    <td className="py-4">
                      {
                        position.leverage
                      }x
                    </td>

                    <td className="py-4 text-yellow-400">
                      OPEN
                    </td>

                    <td className="py-4">

                      <button
                        onClick={() =>
                          closePosition(
                            position._id
                          )
                        }
                        className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl font-semibold"
                      >
                        Close
                      </button>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Futures;