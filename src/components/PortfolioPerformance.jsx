import React from "react";

const PortfolioPerformance = () => {

  const performance = [

    {
      month: "Jan",
      value: 35,
    },

    {
      month: "Feb",
      value: 48,
    },

    {
      month: "Mar",
      value: 42,
    },

    {
      month: "Apr",
      value: 66,
    },

    {
      month: "May",
      value: 82,
    },

    {
      month: "Jun",
      value: 74,
    },
  ];

  return (

    <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

      <div className="p-8 border-b border-white/10 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black">
            Portfolio Performance
          </h2>

          <p className="text-gray-400 mt-2">
            6 month growth analytics
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-black">

          +28.4%

        </div>

      </div>

      <div className="p-8">

        <div className="h-[320px] flex items-end justify-between gap-4">

          {performance.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="flex-1 flex flex-col items-center justify-end"
              >

                <div
                  className="w-full rounded-t-[20px] bg-gradient-to-t from-yellow-500 to-yellow-300 hover:scale-105 transition-all duration-300"
                  style={{
                    height: `${item.value * 3}px`,
                  }}
                />

                <p className="text-gray-400 mt-4 text-sm">
                  {item.month}
                </p>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
};

export default PortfolioPerformance;