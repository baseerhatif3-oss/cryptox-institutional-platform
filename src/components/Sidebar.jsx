import { useState } from "react";

function Sidebar() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      {/* TOPBAR */}

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "#0f172a",
          padding: "15px 20px",
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          color: "white",
          zIndex: 1000,
        }}
      >
        <h2>CryptoX</h2>

        <button
          onClick={() =>
            setOpen(!open)
          }
          style={{
            background:
              "#2563eb",
            border: "none",
            color: "white",
            padding:
              "10px 15px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Menu
        </button>
      </div>

      {/* SIDEBAR */}

      <div
        style={{
          width:
            window.innerWidth >
            768
              ? "250px"
              : open
              ? "250px"
              : "0px",

          overflow: "hidden",

          background:
            "#0f172a",

          height: "100vh",

          padding:
            window.innerWidth >
              768 ||
            open
              ? "90px 20px"
              : "90px 0px",

          position: "fixed",

          left: 0,

          top: 0,

          color: "white",

          display: "flex",

          flexDirection:
            "column",

          gap: "20px",

          transition:
            "0.3s ease",

          zIndex: 999,
        }}
      >
        <button
          onClick={() => {
            window.location.href =
              "/dashboard";
          }}
          style={btn}
        >
          📊 Dashboard
        </button>

        <button
          onClick={() => {
            window.location.href =
              "/portfolio";
          }}
          style={btn}
        >
          💼 Portfolio
        </button>

        <button
          onClick={() => {
            window.location.href =
              "/wallet";
          }}
          style={btn}
        >
          👛 Wallet
        </button>

        <button
          onClick={() => {
            window.location.href =
              "/transactions";
          }}
          style={btn}
        >
          📜 Transactions
        </button>

        <button
          onClick={() => {
            window.location.href =
              "/watchlist";
          }}
          style={btn}
        >
          ⭐ Watchlist
        </button>

        <button
          onClick={() => {
            localStorage.removeItem(
              "userInfo"
            );

            window.location.href =
              "/";
          }}
          style={logoutBtn}
        >
          🚪 Logout
        </button>
      </div>
    </>
  );
}

const btn = {
  background: "#1e293b",
  border: "none",
  padding: "15px",
  borderRadius: "12px",
  color: "white",
  cursor: "pointer",
  textAlign: "left",
};

const logoutBtn = {
  background: "#ef4444",
  border: "none",
  padding: "15px",
  borderRadius: "12px",
  color: "white",
  cursor: "pointer",
  textAlign: "left",
};

export default Sidebar;