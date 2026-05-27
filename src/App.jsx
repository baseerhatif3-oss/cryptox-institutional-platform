import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        CryptoX 🚀
      </h1>

      <Link
        to="/login"
        style={{
          background: "#facc15",
          color: "#000",
          padding: "15px 40px",
          borderRadius: "20px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        Open Login
      </Link>
    </div>
  );
}

function Login() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        Login Working ✅
      </h1>

      <Link
        to="/dashboard"
        style={{
          background: "#22c55e",
          color: "#000",
          padding: "15px 40px",
          borderRadius: "20px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "22px",
        }}
      >
        Enter Dashboard
      </Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        CryptoX Dashboard 📊
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {[
          "Wallet",
          "Spot Trading",
          "Futures",
          "Portfolio",
          "NFT",
          "Staking",
          "Launchpad",
          "Settings",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "#111",
              border: "1px solid #333",
              borderRadius: "20px",
              padding: "30px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;