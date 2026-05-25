import MainLayout from "../components/layout/MainLayout";

const Trading = () => {

  return (

    <MainLayout>

      <h1 className="text-5xl font-black mb-2">
        Spot Trading
      </h1>

      <p className="text-zinc-400 mb-10">
        Professional crypto trading terminal
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2 bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

          <div className="flex justify-between items-center mb-5">

            <div>

              <h2 className="text-3xl font-bold">
                BTC/USDT
              </h2>

              <p className="text-green-400">
                +4.82%
              </p>

            </div>

            <div className="text-right">

              <h3 className="text-4xl font-black">
                $84,520
              </h3>

            </div>

          </div>

          <div className="h-[600px] rounded-2xl overflow-hidden">

            <iframe
              title="tradingview"
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget&symbol=BINANCE:BTCUSDT&interval=60&hidesidetoolbar=0&theme=dark"
              width="100%"
              height="100%"
            />

          </div>

        </div>

        <div className="space-y-6">

          <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Place Order
            </h2>

            <div className="space-y-4">

              <input
                placeholder="Amount"
                className="w-full bg-black border border-yellow-500/10 rounded-xl px-4 py-4 outline-none"
              />

              <input
                placeholder="Price"
                className="w-full bg-black border border-yellow-500/10 rounded-xl px-4 py-4 outline-none"
              />

              <button className="w-full bg-green-500 text-black py-4 rounded-xl font-bold">
                Buy BTC
              </button>

              <button className="w-full bg-red-500 text-white py-4 rounded-xl font-bold">
                Sell BTC
              </button>

            </div>

          </div>

          <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Market Stats
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-zinc-400">24H Volume</span>
                <span>$38.2B</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">Market Cap</span>
                <span>$1.68T</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">Dominance</span>
                <span>52.8%</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default Trading;