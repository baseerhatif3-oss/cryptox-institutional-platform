import MainLayout from "../components/layout/MainLayout";

const Markets = () => {

  const markets = [

    {
      coin: "BTC",
      name: "Bitcoin",
      price: "$84,520",
      change: "+4.82%",
      positive: true,
    },

    {
      coin: "ETH",
      name: "Ethereum",
      price: "$4,280",
      change: "+2.18%",
      positive: true,
    },

    {
      coin: "SOL",
      name: "Solana",
      price: "$182",
      change: "-1.34%",
      positive: false,
    },

    {
      coin: "BNB",
      name: "Binance Coin",
      price: "$712",
      change: "+1.88%",
      positive: true,
    },

    {
      coin: "XRP",
      name: "Ripple",
      price: "$1.24",
      change: "+8.20%",
      positive: true,
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Live Markets
        </h1>

        <p className="text-zinc-500 mt-2">
          Real-time crypto market overview
        </p>

      </div>

      <div className="bg-[#111] border border-yellow-500/10 rounded-3xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-black">

            <tr>

              <th className="text-left p-5 text-yellow-400">
                Coin
              </th>

              <th className="text-left p-5 text-yellow-400">
                Name
              </th>

              <th className="text-left p-5 text-yellow-400">
                Price
              </th>

              <th className="text-left p-5 text-yellow-400">
                24H Change
              </th>

              <th className="text-left p-5 text-yellow-400">
                Market Status
              </th>

            </tr>

          </thead>

          <tbody>

            {
              markets.map(
                (market, index) => (

                  <tr
                    key={index}
                    className="border-t border-yellow-500/10"
                  >

                    <td className="p-5 font-black">
                      {market.coin}
                    </td>

                    <td className="p-5 text-zinc-400">
                      {market.name}
                    </td>

                    <td className="p-5 font-bold">
                      {market.price}
                    </td>

                    <td className={`p-5 font-bold ${
                      market.positive
                        ? "text-green-400"
                        : "text-red-400"
                    }`}>

                      {market.change}

                    </td>

                    <td className="p-5">

                      <span className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold text-sm">

                        Active

                      </span>

                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>

    </MainLayout>
  );
};

export default Markets;