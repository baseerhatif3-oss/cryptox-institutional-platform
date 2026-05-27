const LiveTicker = () => {

  const items = [

    "BTC $84,320 ▲ 3.2%",

    "ETH $4,280 ▲ 2.4%",

    "SOL $182 ▲ 6.1%",

    "BNB $690 ▲ 1.2%",

    "XRP $1.22 ▲ 5.4%",
  ];

  return (

    <div className="w-full overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur-xl py-4">

      <div className="flex gap-16 animate-[ticker_25s_linear_infinite] whitespace-nowrap">

        {
          [...items, ...items].map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="flex items-center gap-3"
              >

                <div className="w-2 h-2 bg-green-400 rounded-full"></div>

                <span className="text-green-400 font-black text-lg">

                  {item}

                </span>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default LiveTicker;