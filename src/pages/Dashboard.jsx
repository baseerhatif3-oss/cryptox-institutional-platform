import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl">
            Bitcoin
          </h2>

          <p className="text-3xl font-bold mt-4">
            $79,000
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl">
            Ethereum
          </h2>

          <p className="text-3xl font-bold mt-4">
            $2,200
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl">
          <h2 className="text-xl">
            Solana
          </h2>

          <p className="text-3xl font-bold mt-4">
            $89
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;