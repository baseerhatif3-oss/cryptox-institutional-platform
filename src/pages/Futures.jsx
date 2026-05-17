import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import TradingChart from "../components/TradingChart";

import OrderBook from "../components/OrderBook";

const Futures = () => {
  const [coins, setCoins] =
    useState([]);

  const [selectedCoin, setSelectedCoin] =
    useState(null);

  const [amount, setAmount] =
    useState("");

  const [leverage, setLeverage] =
    useState(10);

  const [positionType, setPositionType] =
    useState("LONG");

  const [positions, setPositions] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "futuresPositions"
        )
      ) || []
    );

  const fetchCoins = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );

      const data =
        await response.json();

      setCoins(data.slice(0, 20));

      setSelectedCoin(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const openPosition = () => {
    if (!amount || amount <= 0) {
      return toast.error(
        "Enter valid amount"
      );
    }

    const margin = Number(amount);

    const size =
      margin * leverage;

    const position = {
      id: Date.now(),

      coin: selectedCoin.name,

      symbol:
        selectedCoin.symbol.toUpperCase(),

      image: selectedCoin.image,

      type: positionType,

      leverage,

      margin,

      size,

      entry:
        selectedCoin.current_price,

      pnl:
        (
          Math.random() * 200 -
          100
        ).toFixed(2),
    };

    const updated = [
      position,
      ...positions,
    ];

    setPositions(updated);

    localStorage.setItem(
      "futuresPositions",
      JSON.stringify(updated)
    );

    toast.success(
      `${positionType} position opened`
    );

    setAmount("");
  };

  const closePosition = (id) => {
    const updated =
      positions.filter(
        (p) => p.id !== id
      );

    setPositions(updated);

    localStorage.setItem(
      "futuresPositions",
      JSON.stringify(updated)
    );

    toast.success(
      "Position closed"
    );
  };

  const getTradingViewSymbol =
    () => {
      if (!selectedCoin)
        return "BINANCE:BTCUSDT";

      return `BINANCE:${selectedCoin.symbol.toUpperCase()}USDT`;
    };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-[1700px] mx-auto">
        {/* HEADER */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Futures Trading
          </h1>

          <p className="text-slate-400 mt-2">
            Professional leveraged
            derivatives trading.
          </p>
        </div>

        {/* TOP GRID */}

        <div className="grid grid-cols-1 2xl:grid-cols-4 gap-6">
          {/* MARKETS */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Markets
            </h2>

            <div className="space-y-3 max-h-[900px] overflow-y-auto">
              {coins.map((coin) => (
                <button
                  key={coin.id}
                  onClick={() =>
                    setSelectedCoin(
                      coin
                    )
                  }
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition ${
                    selectedCoin?.id ===
                    coin.id
                      ? "bg-blue-600"
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-10 h-10"
                    />

                    <div className="text-left">
                      <h3 className="font-bold">
                        {coin.symbol.toUpperCase()}
                      </h3>

                      <p className="text-sm text-slate-300">
                        {coin.name}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      $
                      {coin.current_price.toLocaleString()}
                    </p>

                    <p
                      className={`text-sm ${
                        coin.price_change_percentage_24h >
                        0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {coin.price_change_percentage_24h?.toFixed(
                        2
                      )}
                      %
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CHART */}

          <div className="2xl:col-span-2">
            <TradingChart
              symbol={getTradingViewSymbol()}
            />
          </div>

          {/* TRADING PANEL */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold mb-6">
              Open Position
            </h2>

            {selectedCoin && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={selectedCoin.image}
                    alt={
                      selectedCoin.name
                    }
                    className="w-14 h-14"
                  />

                  <div>
                    <h3 className="text-2xl font-bold">
                      {selectedCoin.symbol.toUpperCase()}
                    </h3>

                    <p className="text-slate-400">
                      {
                        selectedCoin.name
                      }
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* MARGIN */}

                  <div>
                    <label className="block mb-2 text-slate-300">
                      Margin (USDT)
                    </label>

                    <input
                      type="number"
                      placeholder="Enter margin"
                      value={amount}
                      onChange={(e) =>
                        setAmount(
                          e.target.value
                        )
                      }
                      className="w-full bg-slate-800 p-4 rounded-xl outline-none"
                    />
                  </div>

                  {/* LEVERAGE */}

                  <div>
                    <label className="block mb-2 text-slate-300">
                      Leverage
                    </label>

                    <select
                      value={leverage}
                      onChange={(e) =>
                        setLeverage(
                          Number(
                            e.target.value
                          )
                        )
                      }
                      className="w-full bg-slate-800 p-4 rounded-xl outline-none"
                    >
                      <option value={5}>
                        5x
                      </option>

                      <option value={10}>
                        10x
                      </option>

                      <option value={20}>
                        20x
                      </option>

                      <option value={50}>
                        50x
                      </option>

                      <option value={100}>
                        100x
                      </option>
                    </select>
                  </div>

                  {/* LONG SHORT */}

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() =>
                        setPositionType(
                          "LONG"
                        )
                      }
                      className={`py-4 rounded-xl font-bold ${
                        positionType ===
                        "LONG"
                          ? "bg-green-600"
                          : "bg-slate-800"
                      }`}
                    >
                      LONG
                    </button>

                    <button
                      onClick={() =>
                        setPositionType(
                          "SHORT"
                        )
                      }
                      className={`py-4 rounded-xl font-bold ${
                        positionType ===
                        "SHORT"
                          ? "bg-red-600"
                          : "bg-slate-800"
                      }`}
                    >
                      SHORT
                    </button>
                  </div>

                  {/* POSITION INFO */}

                  <div className="bg-slate-800 rounded-2xl p-5 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Entry Price
                      </span>

                      <span>
                        $
                        {selectedCoin.current_price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Position Size
                      </span>

                      <span>
                        $
                        {(
                          Number(
                            amount || 0
                          ) * leverage
                        ).toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-400">
                        Leverage
                      </span>

                      <span>
                        {leverage}x
                      </span>
                    </div>
                  </div>

                  {/* BUTTON */}

                  <button
                    onClick={
                      openPosition
                    }
                    className={`w-full py-4 rounded-xl font-bold text-lg ${
                      positionType ===
                      "LONG"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                  >
                    Open {positionType}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* POSITIONS */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-6">
          <h2 className="text-2xl font-bold mb-6">
            Open Positions
          </h2>

          <div className="space-y-4">
            {positions.length === 0 && (
              <div className="text-slate-400">
                No open positions
              </div>
            )}

            {positions.map((position) => (
              <div
                key={position.id}
                className="bg-slate-800 rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={position.image}
                      alt={position.coin}
                      className="w-10 h-10"
                    />

                    <div>
                      <h3 className="font-bold">
                        {position.symbol}
                      </h3>

                      <p
                        className={`text-sm ${
                          position.type ===
                          "LONG"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {position.type}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      closePosition(
                        position.id
                      )
                    }
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-sm"
                  >
                    Close
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">
                      Margin
                    </p>

                    <p>
                      ${position.margin}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Size
                    </p>

                    <p>
                      ${position.size}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Entry
                    </p>

                    <p>
                      ${position.entry}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      Leverage
                    </p>

                    <p>
                      {position.leverage}x
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">
                      PNL
                    </p>

                    <p
                      className={
                        Number(
                          position.pnl
                        ) >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      ${position.pnl}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ORDER BOOK */}

        <div className="mt-6">
          <OrderBook />
        </div>
      </div>
    </div>
  );
};

export default Futures;