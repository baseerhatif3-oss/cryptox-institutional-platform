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
        {/* AUTH */}

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
          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="wallet"
            element={<Wallet />}
          />

          <Route
            path="portfolio"
            element={<Portfolio />}
          />

          <Route
            path="futures"
            element={<Futures />}
          />

          <Route
            path="transactions"
            element={<Transactions />}
          />

          <Route
            path="orders"
            element={<OpenOrders />}
          />

          <Route
            path="watchlist"
            element={<Watchlist />}
          />

          <Route
            path="admin"
            element={<AdminDashboard />}
          />

          <Route
            path="kyc"
            element={<KYC />}
          />

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