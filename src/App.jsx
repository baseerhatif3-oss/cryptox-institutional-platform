import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function Landing() {

  return (

    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "40px",
        fontWeight: "bold",
      }}
    >

      CryptoX Working 🚀

    </div>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Landing />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;