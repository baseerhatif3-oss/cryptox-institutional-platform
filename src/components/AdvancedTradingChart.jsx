import React, {
  useEffect,
  useRef,
} from "react";

import {
  createChart,
} from "lightweight-charts";

const AdvancedTradingChart = () => {

  const chartContainerRef =
    useRef();

  useEffect(() => {

    const chart =
      createChart(
        chartContainerRef.current,
        {

          width:
            chartContainerRef.current.clientWidth,

          height: 500,

          layout: {

            background: {
              color:
                "#0a0a0a",
            },

            textColor:
              "#d1d5db",
          },

          grid: {

            vertLines: {
              color:
                "rgba(255,255,255,0.05)",
            },

            horzLines: {
              color:
                "rgba(255,255,255,0.05)",
            },
          },

          crosshair: {

            mode: 1,
          },

          rightPriceScale: {

            borderColor:
              "rgba(255,255,255,0.1)",
          },

          timeScale: {

            borderColor:
              "rgba(255,255,255,0.1)",
          },
        }
      );

    const candleSeries =
      chart.addCandlestickSeries({

        upColor:
          "#22c55e",

        downColor:
          "#ef4444",

        borderVisible:
          false,

        wickUpColor:
          "#22c55e",

        wickDownColor:
          "#ef4444",
      });

    candleSeries.setData([

      {
        time:
          "2025-05-10",

        open:
          78000,

        high:
          82000,

        low:
          77000,

        close:
          81000,
      },

      {
        time:
          "2025-05-11",

        open:
          81000,

        high:
          83500,

        low:
          80500,

        close:
          82800,
      },

      {
        time:
          "2025-05-12",

        open:
          82800,

        high:
          84200,

        low:
          82000,

        close:
          83900,
      },

      {
        time:
          "2025-05-13",

        open:
          83900,

        high:
          85000,

        low:
          83000,

        close:
          84500,
      },

      {
        time:
          "2025-05-14",

        open:
          84500,

        high:
          86000,

        low:
          84000,

        close:
          85800,
      },
    ]);

    const handleResize =
      () => {

        chart.applyOptions({

          width:
            chartContainerRef.current
              .clientWidth,
        });
      };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

      chart.remove();
    };

  }, []);

  return (

    <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

      <div className="p-6 border-b border-white/10 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black">
            BTC/USDT
          </h2>

          <p className="text-gray-400 mt-1">
            Advanced Trading Terminal
          </p>

        </div>

        <div className="flex items-center gap-3">

          <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-sm">
            1H
          </button>

          <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl text-sm font-bold">
            4H
          </button>

          <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-sm">
            1D
          </button>

        </div>

      </div>

      <div
        ref={chartContainerRef}
        className="w-full"
      />

    </div>
  );
};

export default AdvancedTradingChart;