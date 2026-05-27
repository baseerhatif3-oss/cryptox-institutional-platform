const assets = [

  {
    coin: "BTC",
    price: "$84,220",
    change: "+4.2%",
  },

  {
    coin: "ETH",
    price: "$4,180",
    change: "+2.8%",
  },

  {
    coin: "SOL",
    price: "$182",
    change: "+8.1%",
  },

  {
    coin: "BNB",
    price: "$704",
    change: "+1.6%",
  },
];

const Watchlist = () => {

  return (

    <div className="glass rounded-[32px] p-8">

      <h2 className="text-4xl font-black mb-8">

        Watchlist

      </h2>

      <div className="space-y-5">

        {
          assets.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="flex items-center justify-between bg-black/30 rounded-2xl p-5 border border-white/5"
              >

                <div>

                  <h3 className="text-2xl font-black">

                    {
                      item.coin
                    }

                  </h3>

                  <p className="text-zinc-500">

                    {
                      item.price
                    }

                  </p>

                </div>

                <div className="text-green-400 font-black text-xl">

                  {
                    item.change
                  }

                </div>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default Watchlist;