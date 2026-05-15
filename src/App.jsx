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

import Watchlist from "./pages/Watchlist";

import NotFound from "./pages/NotFound";

function App() {
  const user = JSON.parse(
    localStorage.getItem(
      "userInfo"
    )
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}

        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={
            <Register />
          }
        />

        {/* DASHBOARD */}

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

        {/* PORTFOLIO */}

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

        {/* WALLET */}

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

        {/* TRANSACTIONS */}

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

        {/* WATCHLIST */}

        <Route
          path="/watchlist"
          element={
            user ? (
              <Watchlist />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;