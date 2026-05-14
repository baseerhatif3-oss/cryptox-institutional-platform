import {
  FaBitcoin,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  const userInfo = JSON.parse(
    localStorage.getItem(
      "userInfo"
    )
  );

  const logoutHandler = () => {
    localStorage.removeItem(
      "userInfo"
    );

    window.location.href =
      "/login";
  };

  return (
    <div
      style={{
        background: "#111827",
        padding: "18px 40px",
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
        borderBottom:
          "1px solid #1e293b",
      }}
    >
      {/* LOGO */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <FaBitcoin
          color="#facc15"
          size={28}
        />

        <h2
          style={{
            color: "#facc15",
            margin: 0,
          }}
        >
          CryptoX
        </h2>
      </div>

      {/* USER */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaUserCircle
            size={24}
            color="#94a3b8"
          />

          <span
            style={{
              color: "white",
            }}
          >
            {userInfo?.name}
          </span>
        </div>

        <button
          onClick={
            logoutHandler
          }
          style={{
            background:
              "#ef4444",
            color: "white",
            border: "none",
            padding:
              "12px 20px",
            borderRadius:
              "10px",
            cursor: "pointer",
            fontWeight:
              "bold",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;