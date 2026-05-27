import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {

  return (

    <div
      style={{
        background: "black",
        color: "white",
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
          color: "black",
          padding: "15px 40px",
          borderRadius: "20px",
          fontWeight: "bold",
          textDecoration: "none",
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
        background: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "50px",
        fontWeight: "bold",
      }}
    >

      LOGIN PAGE WORKING ✅

    </div>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;