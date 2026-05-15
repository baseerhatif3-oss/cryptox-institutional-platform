function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        minHeight: "100vh",
        background:
          "#020617",
      }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          border:
            "8px solid #1e293b",
          borderTop:
            "8px solid #2563eb",
          borderRadius:
            "50%",
          animation:
            "spin 1s linear infinite",
        }}
      />

      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loader;