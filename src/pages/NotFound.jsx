function NotFound() {
  return (
    <div
      style={{
        background:
          "#020617",
        minHeight: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
        flexDirection:
          "column",
        color: "white",
        fontFamily:
          "Arial",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "90px",
          marginBottom:
            "10px",
        }}
      >
        404
      </h1>

      <h2>
        Page Not Found
      </h2>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "10px",
        }}
      >
        The page you are
        looking for does
        not exist.
      </p>

      <button
        onClick={() => {
          window.location.href =
            "/dashboard";
        }}
        style={{
          marginTop: "30px",
          padding:
            "14px 24px",
          border: "none",
          borderRadius:
            "10px",
          background:
            "#2563eb",
          color: "white",
          cursor:
            "pointer",
          fontSize: "16px",
        }}
      >
        Go Dashboard
      </button>
    </div>
  );
}

export default NotFound;