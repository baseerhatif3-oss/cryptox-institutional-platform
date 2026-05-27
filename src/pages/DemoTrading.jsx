import MainLayout from "../components/layout/MainLayout";

const DemoTrading = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black mb-4">

          Demo
          <span className="text-yellow-400">
            {" "}Trading
          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Practice institutional trading strategies risk-free.

        </p>

      </div>

      <div className="glass rounded-3xl p-10">

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          <div className="glass rounded-3xl p-8">

            <h2 className="text-3xl font-black mb-4">

              Demo Balance

            </h2>

            <h3 className="text-5xl font-black text-yellow-400">

              $100,000

            </h3>

          </div>

          <div className="glass rounded-3xl p-8">

            <h2 className="text-3xl font-black mb-4">

              Demo Profit

            </h2>

            <h3 className="text-5xl font-black text-green-400">

              +$12,420

            </h3>

          </div>

          <div className="glass rounded-3xl p-8">

            <h2 className="text-3xl font-black mb-4">

              Win Rate

            </h2>

            <h3 className="text-5xl font-black text-blue-400">

              82%

            </h3>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default DemoTrading;