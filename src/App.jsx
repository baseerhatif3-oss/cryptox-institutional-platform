import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Admin from "./pages/Admin";

import SpotTrading from "./pages/SpotTrading";

import Wallet from "./pages/Wallet";

import Navbar from "./components/Navbar";

function App() {

  const token =
    localStorage.getItem(
      "token"
    );

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-black text-white">

        {/* NAVBAR */}

        {token && <Navbar />}



        {/* MAIN CONTENT */}

        <div className="max-w-7xl mx-auto p-6">

          <Routes>

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
              path="/"
              element={
                token ? (
                  <Dashboard />
                ) : (
                  <Navigate
                    to="/login"
                  />
                )
              }
            />



            {/* SPOT TRADING */}

            <Route
              path="/spot"
              element={
                token ? (
                  <SpotTrading />
                ) : (
                  <Navigate
                    to="/login"
                  />
                )
              }
            />



            {/* WALLET */}

            <Route
              path="/wallet"
              element={
                token ? (
                  <Wallet />
                ) : (
                  <Navigate
                    to="/login"
                  />
                )
              }
            />



            {/* ADMIN */}

            <Route
              path="/admin"
              element={
                token &&
                user?.role ===
                  "admin" ? (
                  <Admin />
                ) : (
                  <Navigate
                    to="/"
                  />
                )
              }
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;