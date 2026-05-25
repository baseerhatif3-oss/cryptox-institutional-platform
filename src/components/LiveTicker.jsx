const LiveTicker = ({
  symbol,
  price,
  change,
}) => {

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-2xl px-5 py-4 flex items-center justify-between hover:border-yellow-400/30 transition-all">

      <div>

        <h3 className="font-black text-lg">
          {symbol}
        </h3>

        <p className="text-zinc-500 text-sm">
          Live Market
        </p>

      </div>

      <div className="text-right">

        <h2 className="font-black text-xl">

          $
          {
            Number(price)
              .toLocaleString()
          }

        </h2>

        <p className={`font-bold text-sm ${
          change.includes("-")
            ? "text-red-400"
            : "text-green-400"
        }`}>

          {change}

        </p>

      </div>

    </div>
  );
};

export default LiveTicker;