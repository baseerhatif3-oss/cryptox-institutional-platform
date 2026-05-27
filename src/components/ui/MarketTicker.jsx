const coins = [

  "BTC $74,820 +2.4%",
  "ETH $4,210 +3.1%",
  "SOL $182 +8.4%",
  "BNB $710 +1.9%",
  "XRP $1.22 +4.1%",
  "DOGE $0.18 +12.4%",
  "ADA $1.08 +2.8%",
  "AVAX $64 +7.5%",
];

const MarketTicker = () => {

  return (

    <div className="w-full overflow-hidden border-y border-white/5 bg-black py-4">

      <div className="flex gap-16 whitespace-nowrap animate-[ticker_30s_linear_infinite]">

        {
          [...coins, ...coins].map(
            (
              coin,
              index
            ) => (

              <div
                key={index}
                className="text-green-400 font-bold text-lg"
              >

                {coin}

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default MarketTicker;