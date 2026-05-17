import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Wallet from "./pages/Wallet";

import Portfolio from "./pages/Portfolio";

import Futures from "./pages/Futures";

import CopyTrading from "./pages/CopyTrading";

import Staking from "./pages/Staking";

import NFTMarketplace from "./pages/NFTMarketplace";

import Transactions from "./pages/Transactions";

import Profile from "./pages/Profile";

import OpenOrders from "./pages/OpenOrders";

import Watchlist from "./pages/Watchlist";

import ForgotPassword from "./pages/ForgotPassword";

import ResetPassword from "./pages/ResetPassword";

import AdminDashboard from "./pages/AdminDashboard";

import KYC from "./pages/KYC";

import DashboardLayout from "./layouts/DashboardLayout";

const ProtectedRoute = ({
  children,
}) => {
  const token =
    localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        {/* AUTH ROUTES */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        {/* DASHBOARD */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* HOME */}

          <Route
            index
            element={<Dashboard />}
          />

          {/* WALLET */}

          <Route
            path="wallet"
            element={<Wallet />}
          />

          {/* PORTFOLIO */}

          <Route
            path="portfolio"
            element={<Portfolio />}
          />

          {/* FUTURES */}

          <Route
            path="futures"
            element={<Futures />}
          />

          {/* COPY TRADING */}

          <Route
            path="copy-trading"
            element={
              <CopyTrading />
            }
          />

          {/* STAKING */}

          <Route
            path="staking"
            element={<Staking />}
          />

          {/* NFT MARKETPLACE */}

          <Route
            path="nft-marketplace"
            element={
              <NFTMarketplace />
            }
          />

          {/* TRANSACTIONS */}

          <Route
            path="transactions"
            element={<Transactions />}
          />

          {/* ORDERS */}

          <Route
            path="orders"
            element={<OpenOrders />}
          />

          {/* WATCHLIST */}

          <Route
            path="watchlist"
            element={<Watchlist />}
          />

          {/* ADMIN */}

          <Route
            path="admin"
            element={
              <AdminDashboard />
            }
          />

          {/* KYC */}

          <Route
            path="kyc"
            element={<KYC />}
          />

          {/* PROFILE */}

          <Route
            path="profile"
            element={<Profile />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;