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
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/dashboard" />
            ) : (
              <Register />
            )
          }
        />

        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/portfolio"
          element={
            user ? (
              <Portfolio />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/wallet"
          element={
            user ? (
              <Wallet />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/transactions"
          element={
            user ? (
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