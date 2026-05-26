import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../components/layout/MainLayout";

import API from "../services/api";

const AISignals = () => {

  const [signal, setSignal] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchSignal();

    const interval =
      setInterval(
        fetchSignal,
        5000
      );

    return () =>
      clearInterval(interval);

  }, []);

  const fetchSignal =
    async () => {

      try {

        const response =
          await API.get(
            "/ai/signal"
          );

        setSignal(
          response.data.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  if (loading) {

    return (

      <MainLayout>

        <div className="flex items-center justify-center h-[70vh]">

          <h1 className="text-4xl font-black text-yellow-400 animate-pulse">

            Loading AI Signals...

          </h1>

        </div>

      </MainLayout>
    );
  }

  return (

    <MainLayout>

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-5xl font-black">
            AI Trading Signals
          </h1>

          <p className="text-zinc-500 mt-2">
            Real-time AI market analysis engine
          </p>

        </div>

        <div className="flex items-center gap-3 bg-green-500/20 px-5 py-3 rounded-2xl w-fit">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-bold">
            AI LIVE ENGINE
          </span>

        </div>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">
            AI Signal
          </p>

          <h2 className={`text-6xl font-black ${
            signal.signal === "BUY"
              ? "text-green-400"
              : signal.signal === "SELL"
              ? "text-red-400"
              : "text-yellow-400"
          }`}>

            {signal.signal}

          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">
            Confidence Score
          </p>

          <h2 className="text-6xl font-black text-blue-400">

            {signal.confidence}%

          </h2>

        </div>

        <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">
            Market Trend
          </p>

          <h2 className="text-5xl font-black text-yellow-400 uppercase">

            {signal.trend}

          </h2>

        </div>

      </div>

      <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8 mt-8">

        <h2 className="text-4xl font-black mb-6">
          AI Analysis
        </h2>

        <div className="space-y-5 text-zinc-300 text-lg">

          <p>
            • AI engine analyzing BTC/USDT live market conditions.
          </p>

          <p>
            • Volume and price momentum indicate strong activity.
          </p>

          <p>
            • Market sentiment currently showing:
            <span className="text-yellow-400 font-bold ml-2 uppercase">
              {signal.trend}
            </span>
          </p>

          <p>
            • Recommended action:
            <span className={`font-bold ml-2 ${
              signal.signal === "BUY"
                ? "text-green-400"
                : signal.signal === "SELL"
                ? "text-red-400"
                : "text-yellow-400"
            }`}>

              {signal.signal}

            </span>
          </p>

        </div>

      </div>

    </MainLayout>
  );
};

export default AISignals;