import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";

import PriceTicker from "./components/PriceTicker";

import Footer from "./components/Footer";

import MobileBottomNav from "./components/MobileBottomNav";

import Landing from "./pages/Landing";

import Dashboard from "./pages/Dashboard";

import SpotTrading from "./pages/SpotTrading";

import Futures from "./pages/Futures";

import Wallet from "./pages/Wallet";

import Transactions from "./pages/Transactions";

import Leaderboard from "./pages/Leaderboard";

import VIP from "./pages/VIP";

import Referral from "./pages/Referral";

import Analytics from "./pages/Analytics";

import Settings from "./pages/Settings";

import Admin from "./pages/Admin";

import Login from "./pages/Login";

import Register from "./pages/Register";

import KYC from "./pages/KYC";

/*
==========================================
PROTECTED ROUTE
==========================================
*/

const ProtectedRoute = ({
  children,
}) => {

  const token =
    localStorage.getItem(
      "token"
    );

  if (!token) {

    return (
      <Navigate to="/login" />
    );
  }

  return children;
};

function App() {

  return (

    <BrowserRouter>

      {/* TOASTER */}

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background:
              "#111",

            color:
              "#fff",

            border:
              "1px solid rgba(255,255,255,0.1)",

            borderRadius:
              "18px",

            padding:
              "16px",

            fontWeight:
              "700",
          },
        }}
      />

      <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">

        {/* BACKGROUND */}

        <div className="fixed inset-0 -z-10">

          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#facc15_0%,transparent_25%)] opacity-10" />

          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#2563eb_0%,transparent_25%)] opacity-10" />

        </div>

        {/* NAVBAR */}

        <Navbar />

        {/* LIVE TICKER */}

        <PriceTicker />

        {/* MAIN */}

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 pb-28 lg:pb-10">

          <Routes>

            {/* LANDING */}

            <Route
              path="/"
              element={<Landing />}
            />

            {/* AUTH */}

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            {/* DASHBOARD */}

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>

                  <Dashboard />

                </ProtectedRoute>
              }
            />

            {/* SPOT */}

            <Route
              path="/spot"
              element={
                <ProtectedRoute>

                  <SpotTrading />

                </ProtectedRoute>
              }
            />

            {/* FUTURES */}

            <Route
              path="/futures"
              element={
                <ProtectedRoute>

                  <Futures />

                </ProtectedRoute>
              }
            />

            {/* WALLET */}

            <Route
              path="/wallet"
              element={
                <ProtectedRoute>

                  <Wallet />

                </ProtectedRoute>
              }
            />

            {/* TRANSACTIONS */}

            <Route
              path="/transactions"
              element={
                <ProtectedRoute>

                  <Transactions />

                </ProtectedRoute>
              }
            />

            {/* LEADERBOARD */}

            <Route
              path="/leaderboard"
              element={
                <ProtectedRoute>

                  <Leaderboard />

                </ProtectedRoute>
              }
            />

            {/* VIP */}

            <Route
              path="/vip"
              element={
                <ProtectedRoute>

                  <VIP />

                </ProtectedRoute>
              }
            />

            {/* REFERRAL */}

            <Route
              path="/referral"
              element={
                <ProtectedRoute>

                  <Referral />

                </ProtectedRoute>
              }
            />

            {/* ANALYTICS */}

            <Route
              path="/analytics"
              element={
                <ProtectedRoute>

                  <Analytics />

                </ProtectedRoute>
              }
            />

            {/* SETTINGS */}

            <Route
              path="/settings"
              element={
                <ProtectedRoute>

                  <Settings />

                </ProtectedRoute>
              }
            />

            {/* KYC */}

            <Route
              path="/kyc"
              element={
                <ProtectedRoute>

                  <KYC />

                </ProtectedRoute>
              }
            />

            {/* ADMIN */}

            <Route
              path="/admin"
              element={
                <ProtectedRoute>

                  <Admin />

                </ProtectedRoute>
              }
            />

          </Routes>

        </main>

        {/* FOOTER */}

        <Footer />

        {/* MOBILE NAV */}

        <MobileBottomNav />

      </div>

    </BrowserRouter>
  );
}

export default App;