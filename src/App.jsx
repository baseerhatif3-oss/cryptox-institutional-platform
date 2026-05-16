import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Wallet from "./pages/Wallet";
import Transactions from "./pages/Transactions";
import Watchlist from "./pages/Watchlist";

import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const token =
    localStorage.getItem(
      "token"
    );

  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}

        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login />
            )
          }
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={
            token ? (
              <Navigate to="/dashboard" />
            ) : (
              <Register />
            )
          }
        />

        {/* PROTECTED */}

        <Route
          element={
            token ? (
              <DashboardLayout />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/wallet"
            element={<Wallet />}
          />

          <Route
            path="/transactions"
            element={
              <Transactions />
            }
          />

          <Route
            path="/watchlist"
            element={<Watchlist />}
          />
        </Route>

        {/* FALLBACK */}

        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;