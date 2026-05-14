import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaChartLine,
  FaWallet,
  FaHistory,
  FaBitcoin,
} from "react-icons/fa";

function Sidebar() {
  const location =
    useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaChartLine />,
    },

    {
      name: "Portfolio",
      path: "/portfolio",
      icon: <FaBitcoin />,
    },

    {
      name: "Wallet",
      path: "/wallet",
      icon: <FaWallet />,
    },

    {
      name: "Transactions",
      path: "/transactions",
      icon: <FaHistory />,
    },
  ];

  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        minHeight:
          "calc(100vh - 72px)",
        padding: "30px 20px",
        borderRight:
          "1px solid #1e293b",
      }}
    >
      <h2
        style={{
          color: "#facc15",
          marginBottom: "40px",
        }}
      >
        Trading Panel
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection:
            "column",
          gap: "15px",
        }}
      >
        {menuItems.map(
          (item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration:
                  "none",

                background:
                  location.pathname ===
                  item.path
                    ? "#22c55e"
                    : "transparent",

                color: "white",

                padding:
                  "15px 20px",

                borderRadius:
                  "12px",

                display: "flex",

                alignItems:
                  "center",

                gap: "12px",

                fontWeight:
                  "bold",

                transition:
                  "0.3s",
              }}
            >
              {item.icon}

              {item.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Sidebar;