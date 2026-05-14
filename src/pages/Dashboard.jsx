function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>
        Dashboard Working ✅
      </h1>

      <p>
        Welcome{" "}
        {user?.name}
      </p>

      <button
        onClick={() => {
          localStorage.removeItem(
            "userInfo"
          );

          window.location.href =
            "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;