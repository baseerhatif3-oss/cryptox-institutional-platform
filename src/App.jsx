import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Portfolio from "./pages/Portfolio";

import Wallet from "./pages/Wallet";

import Transactions from "./pages/Transactions";

function App() {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* REGISTER */}

        <Route
          path="/"
          element={
            userInfo ? (
              <Navigate to="/dashboard" />
            ) : (
              <Register />
            )
          }
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={
            userInfo ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            userInfo ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* PORTFOLIO */}

        <Route
          path="/portfolio"
          element={
            userInfo ? (
              <Portfolio />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* WALLET */}

        <Route
          path="/wallet"
          element={
            userInfo ? (
              <Wallet />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* TRANSACTIONS */}

        <Route
          path="/transactions"
          element={
            userInfo ? (
              <Transactions />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;