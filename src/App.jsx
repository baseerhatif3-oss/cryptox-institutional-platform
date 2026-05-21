import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* LAYOUT */

import DashboardLayout from "./layouts/DashboardLayout";

/* PAGES */

import Dashboard from "./pages/Dashboard";
import Trading from "./pages/Trading";
import Futures from "./pages/Futures";
import Wallets from "./pages/Wallets";
import Orders from "./pages/Orders";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Analytics from "./pages/Analytics";
import CopyTrading from "./pages/CopyTrading";

import Login from "./pages/Login";
import Register from "./pages/Register";

/* GLOBAL CSS */

import "./index.css";

function App() {
  const token =
    localStorage.getItem(
      "token"
    );

  return (
    <BrowserRouter>
      <Routes>
        {/* =========================
            PUBLIC ROUTES
        ========================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* =========================
            PROTECTED ROUTES
        ========================= */}

        <Route
          path="/"
          element={
            token ? (
              <DashboardLayout />
            ) : (
              <Navigate
                to="/login"
              />
            )
          }
        >
          {/* DASHBOARD */}

          <Route
            index
            element={
              <Dashboard />
            }
          />

          <Route
            path="dashboard"
            element={
              <Dashboard />
            }
          />

          {/* TRADING */}

          <Route
            path="trading"
            element={
              <Trading />
            }
          />

          {/* FUTURES */}

          <Route
            path="futures"
            element={
              <Futures />
            }
          />

          {/* WALLETS */}

          <Route
            path="wallets"
            element={
              <Wallets />
            }
          />

          {/* ORDERS */}

          <Route
            path="orders"
            element={
              <Orders />
            }
          />

          {/* ANALYTICS */}

          <Route
            path="analytics"
            element={
              <Analytics />
            }
          />

          {/* COPY TRADING */}

          <Route
            path="copy-trading"
            element={
              <CopyTrading />
            }
          />

          {/* NOTIFICATIONS */}

          <Route
            path="notifications"
            element={
              <Notifications />
            }
          />

          {/* PROFILE */}

          <Route
            path="profile"
            element={
              <Profile />
            }
          />

          {/* ADMIN */}

          <Route
            path="admin"
            element={
              <Admin />
            }
          />
        </Route>

        {/* =========================
            FALLBACK
        ========================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;