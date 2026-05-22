import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* =========================
   LAYOUT
========================= */

import DashboardLayout from "./layouts/DashboardLayout";

/* =========================
   AUTH PAGES
========================= */

import Login from "./pages/Login";

import Register from "./pages/Register";

/* =========================
   MAIN PAGES
========================= */

import Dashboard from "./pages/Dashboard";

import Trading from "./pages/Trading";

import Futures from "./pages/Futures";

import Profile from "./pages/Profile";

/* =========================
   APP
========================= */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* =========================
            AUTH ROUTES
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
            DASHBOARD LAYOUT
        ========================= */}

        <Route
          path="/"
          element={
            <DashboardLayout />
          }
        >
          {/* DASHBOARD */}

          <Route
            index
            element={
              <Dashboard />
            }
          />

          {/* SPOT TRADING */}

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

          {/* PROFILE */}

          <Route
            path="profile"
            element={
              <Profile />
            }
          />
        </Route>

        {/* =========================
            FALLBACK
        ========================= */}

        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;