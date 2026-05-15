function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#0f172a",
        height: "100vh",
        padding: "30px 20px",
        position: "fixed",
        left: 0,
        top: 0,
        color: "white",
        display: "flex",
        flexDirection:
          "column",
        gap: "20px",
      }}
    >
      <h1
        style={{
          marginBottom: "40px",
        }}
      >
        CryptoX
      </h1>

      <button
        onClick={() => {
          window.location.href =
            "/dashboard";
        }}
        style={btn}
      >
        Dashboard
      </button>

      <button
        onClick={() => {
          window.location.href =
            "/portfolio";
        }}
        style={btn}
      >
        Portfolio
      </button>

      <button
        onClick={() => {
          window.location.href =
            "/transactions";
        }}
        style={btn}
      >
        Transactions
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
        Logout
      </button>
    </div>
  );
}

const btn = {
  background: "#1e293b",
  border: "none",
  padding: "15px",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
  textAlign: "left",
};

const logoutBtn = {
  background: "#ef4444",
  border: "none",
  padding: "15px",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
  textAlign: "left",
};

export default Sidebar;