import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import {
  useTheme,
} from "./context/ThemeContext";

import Navbar from "./components/Navbar";

import PriceTicker from "./components/PriceTicker";

import Footer from "./components/Footer";

import MobileBottomNav from "./components/MobileBottomNav";

import Landing from "./pages/Landing";

import Dashboard from "./pages/Dashboard";

import Markets from "./pages/Markets";

import Academy from "./pages/Academy";

import Rewards from "./pages/Rewards";

import Community from "./pages/Community";

import AIPortfolio from "./pages/AIPortfolio";

import Portfolio from "./pages/Portfolio";

import SpotTrading from "./pages/SpotTrading";

import Futures from "./pages/Futures";

import Wallet from "./pages/Wallet";

import Transactions from "./pages/Transactions";

import Leaderboard from "./pages/Leaderboard";

import CopyTrading from "./pages/CopyTrading";

import Staking from "./pages/Staking";

import NFTMarketplace from "./pages/NFTMarketplace";

import Launchpad from "./pages/Launchpad";

import News from "./pages/News";

import AISignals from "./pages/AISignals";

import Support from "./pages/Support";

import Security from "./pages/Security";

import BuyCrypto from "./pages/BuyCrypto";

import VIP from "./pages/VIP";

import Referral from "./pages/Referral";

import Analytics from "./pages/Analytics";

import Settings from "./pages/Settings";

import Admin from "./pages/Admin";

import Login from "./pages/Login";

import Register from "./pages/Register";

import KYC from "./pages/KYC";

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

  const { theme } =
    useTheme();

  return (

    <BrowserRouter>

      <Toaster
        position="top-right"
      />

      <div
        className={`min-h-screen overflow-x-hidden flex flex-col transition-all duration-300 ${
          theme === "dark"
            ? "bg-black text-white"
            : "bg-gray-100 text-black"
        }`}
      >

        {/* BACKGROUND */}

        <div className="fixed inset-0 -z-10">

          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#facc15_0%,transparent_25%)] opacity-10" />

          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#2563eb_0%,transparent_25%)] opacity-10" />

        </div>

        <Navbar />

        <PriceTicker />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 pb-28 lg:pb-10">

          <Routes>

            <Route
              path="/"
              element={<Landing />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
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
              path="/academy"
              element={
                <ProtectedRoute>
                  <Academy />
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
              path="/community"
              element={
                <ProtectedRoute>
                  <Community />
                </ProtectedRoute>
              }
            />

            <Route
              path="/ai-portfolio"
              element={
                <ProtectedRoute>
                  <AIPortfolio />
                </ProtectedRoute>
              }
            />

            <Route
              path="/portfolio"
              element={
                <ProtectedRoute>
                  <Portfolio />
                </ProtectedRoute>
              }
            />

            <Route
              path="/buy-crypto"
              element={
                <ProtectedRoute>
                  <BuyCrypto />
                </ProtectedRoute>
              }
            />

            <Route
              path="/spot"
              element={
                <ProtectedRoute>
                  <SpotTrading />
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
              path="/ai-signals"
              element={
                <ProtectedRoute>
                  <AISignals />
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
              path="/staking"
              element={
                <ProtectedRoute>
                  <Staking />
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
              path="/launchpad"
              element={
                <ProtectedRoute>
                  <Launchpad />
                </ProtectedRoute>
              }
            />

            <Route
              path="/news"
              element={
                <ProtectedRoute>
                  <News />
                </ProtectedRoute>
              }
            />

            <Route
              path="/support"
              element={
                <ProtectedRoute>
                  <Support />
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
              path="/wallet"
              element={
                <ProtectedRoute>
                  <Wallet />
                </ProtectedRoute>
              }
            />

            <Route
              path="/transactions"
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />

            <Route
              path="/vip"
              element={
                <ProtectedRoute>
                  <VIP />
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

            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
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
              path="/kyc"
              element={
                <ProtectedRoute>
                  <KYC />
                </ProtectedRoute>
              }
            />

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

        <Footer />

        <MobileBottomNav />

      </div>

    </BrowserRouter>
  );
}

export default App;