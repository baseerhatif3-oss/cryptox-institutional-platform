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
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";
import OpenOrders from "./pages/OpenOrders";
import Watchlist from "./pages/Watchlist";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/AdminDashboard";

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
            path="profile"
            element={<Profile />}
          />

          <Route
            path="admin"
            element={<AdminDashboard />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;