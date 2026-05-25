import React from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


// PAGES

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Trading from "./pages/Trading";

import Futures from "./pages/Futures";

import Wallet from "./pages/Wallet";

import Markets from "./pages/Markets";

import Profile from "./pages/Profile";

import Settings from "./pages/Settings";

import NFTMarketplace from "./pages/NFTMarketplace";

import Staking from "./pages/Staking";

import CopyTrading from "./pages/CopyTrading";

import Launchpad from "./pages/Launchpad";

import Rewards from "./pages/Rewards";

import Leaderboard from "./pages/Leaderboard";

import Community from "./pages/Community";

import Security from "./pages/Security";

import Notifications from "./pages/Notifications";

import Referral from "./pages/Referral";

import NotFound from "./pages/NotFound";


// COMPONENTS

import Navbar from "./components/Navbar";

import MobileBottomNav from "./components/MobileBottomNav";

import ProtectedRoute from "./components/ProtectedRoute";


// AUTH

import {
  useAuth,
} from "./context/AuthContext";


const App = () => {

  const {
    user,
  } = useAuth();

  return (

    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <Routes>

        {/* PUBLIC ROUTES */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={
            user
              ? (
                <Navigate
                  to="/dashboard"
                />
              )
              : (
                <Login />
              )
          }
        />

        <Route
          path="/register"
          element={
            user
              ? (
                <Navigate
                  to="/dashboard"
                />
              )
              : (
                <Register />
              )
          }
        />


        {/* PROTECTED ROUTES */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="/trading"
          element={
            <ProtectedRoute>

              <Trading />

            </ProtectedRoute>
          }
        />

        <Route
          path="/futures"
          element={
            <ProtectedRoute>

              <Futures />

            </ProtectedRoute>
          }
        />

        <Route
          path="/wallet"
          element={
            <ProtectedRoute>

              <Wallet />

            </ProtectedRoute>
          }
        />

        <Route
          path="/markets"
          element={
            <ProtectedRoute>

              <Markets />

            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>

              <Profile />

            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>

              <Settings />

            </ProtectedRoute>
          }
        />

        <Route
          path="/nft"
          element={
            <ProtectedRoute>

              <NFTMarketplace />

            </ProtectedRoute>
          }
        />

        <Route
          path="/staking"
          element={
            <ProtectedRoute>

              <Staking />

            </ProtectedRoute>
          }
        />

        <Route
          path="/copy-trading"
          element={
            <ProtectedRoute>

              <CopyTrading />

            </ProtectedRoute>
          }
        />

        <Route
          path="/launchpad"
          element={
            <ProtectedRoute>

              <Launchpad />

            </ProtectedRoute>
          }
        />

        <Route
          path="/rewards"
          element={
            <ProtectedRoute>

              <Rewards />

            </ProtectedRoute>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>

              <Leaderboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="/community"
          element={
            <ProtectedRoute>

              <Community />

            </ProtectedRoute>
          }
        />

        <Route
          path="/security"
          element={
            <ProtectedRoute>

              <Security />

            </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>

              <Notifications />

            </ProtectedRoute>
          }
        />

        <Route
          path="/referral"
          element={
            <ProtectedRoute>

              <Referral />

            </ProtectedRoute>
          }
        />


        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <MobileBottomNav />

    </div>
  );
};

export default App;