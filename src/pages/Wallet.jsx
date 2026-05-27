import MainLayout from "../components/layout/MainLayout";

const Wallet = () => {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-6xl font-black mb-4">

          Secure
          <span className="text-yellow-400">
            {" "}Wallet
          </span>

        </h1>

        <p className="text-zinc-500 text-xl">

          Institutional-grade digital asset custody system.

        </p>

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Total Balance

          </p>

          <h2 className="text-6xl font-black text-yellow-400">

            $842,420

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            24H Change

          </p>

          <h2 className="text-6xl font-black text-green-400">

            +12.8%

          </h2>

        </div>

        <div className="glass rounded-3xl p-8">

          <p className="text-zinc-500 mb-4">

            Assets Held

          </p>

          <h2 className="text-6xl font-black text-blue-400">

            24

          </h2>

        </div>

      </div>

    </MainLayout>
  );
};

export default Wallet;