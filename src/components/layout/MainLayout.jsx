import Sidebar from "./Sidebar";

import LiveTicker from "../LiveTicker";

const MainLayout = ({
  children,
}) => {

  return (

    <div className="bg-black min-h-screen text-white">

      <Sidebar />

      <div className="ml-[260px]">

        <div className="border-b border-yellow-500/10 bg-[#0b0b0b] px-8 py-5 flex items-center justify-between sticky top-0 z-50">

          <div>

            <h1 className="text-2xl font-black">
              CryptoX Exchange
            </h1>

            <p className="text-gray-500 text-sm">
              Professional Trading Platform
            </p>

          </div>

          <LiveTicker />

        </div>

        <div className="p-8">

          {children}

        </div>

      </div>

    </div>
  );
};

export default MainLayout;