const pairs = [

  "BTC $84,320 +4.2%",
  "ETH $4,820 +2.1%",
  "SOL $182 +8.8%",
  "BNB $710 +1.2%",
  "XRP $1.82 +5.4%",
  "DOGE $0.42 +12.8%",
];

const MarketTicker = () => {

  return (

    <div className="border-y border-white/5 bg-black/40 overflow-hidden">

      <div className="flex gap-16 py-5 whitespace-nowrap animate-pulse px-10">

        {
          [...pairs, ...pairs].map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="flex items-center gap-3 text-xl font-black"
              >

                <span className="text-yellow-400">

                  {
                    item.split(" ")[0]
                  }

                </span>

                <span className="text-white">

                  {
                    item.split(" ").slice(1).join(" ")
                  }

                </span>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default MarketTicker;