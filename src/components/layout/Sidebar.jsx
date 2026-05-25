import { NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaWallet,
  FaExchangeAlt,
  FaHistory,
  FaHome,
  FaCoins,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Markets",
      path: "/markets",
      icon: <FaChartLine />,
    },
    {
      name: "Wallet",
      path: "/wallet",
      icon: <FaWallet />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <FaExchangeAlt />,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <FaHistory />,
    },
  ];

  return (
    <div className="w-[260px] h-screen bg-black border-r border-yellow-500/20 flex flex-col">
      <div className="p-6 border-b border-yellow-500/20">
        <h1 className="text-3xl font-bold text-yellow-400">
          CryptoX
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          Professional Exchange
        </p>
      </div>

      <div className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-yellow-500 text-black font-bold"
                  : "text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4">
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <FaCoins className="text-yellow-400 text-2xl" />

            <div>
              <h3 className="text-white font-bold">
                VIP Upgrade
              </h3>

              <p className="text-gray-400 text-sm">
                Zero trading fees
              </p>
            </div>
          </div>

          <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-bold transition-all">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;