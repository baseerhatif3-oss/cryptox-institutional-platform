import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import DashboardLayout from "./layouts/DashboardLayout";

import Login from "./pages/Login";

import Register from "./pages/Register";

import VerifyOTP from "./pages/VerifyOTP";

import Dashboard from "./pages/Dashboard";

import Markets from "./pages/Markets";

import Futures from "./pages/Futures";

import Portfolio from "./pages/Portfolio";

import AITrading from "./pages/AITrading";

import CopyTrading from "./pages/CopyTrading";

import Referrals from "./pages/Referrals";

import Staking from "./pages/Staking";

import P2P from "./pages/P2P";

import Deposit from "./pages/Deposit";

import Withdraw from "./pages/Withdraw";

import Wallets from "./pages/Wallets";

import Transactions from "./pages/Transactions";

import Admin from "./pages/Admin";

import ForgotPassword from "./pages/ForgotPassword";

import ResetPassword from "./pages/ResetPassword";

const PrivateRoute = ({
  children,
}) => {
  const token =
    localStorage.getItem(
      "token"
    );

  return token ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
      />

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
          path="/verify-otp"
          element={
            <VerifyOTP />
          }
        />

        <Route
          path="/forgot-password"
          element={
            <ForgotPassword />
          }
        />

        <Route
          path="/reset-password/:token"
          element={
            <ResetPassword />
          }
        />

        {/* MAIN */}

        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route
            index
            element={
              <Dashboard />
            }
          />

          <Route
            path="markets"
            element={
              <Markets />
            }
          />

          <Route
            path="futures"
            element={
              <Futures />
            }
          />

          <Route
            path="portfolio"
            element={
              <Portfolio />
            }
          />

          <Route
            path="wallets"
            element={
              <Wallets />
            }
          />

          <Route
            path="transactions"
            element={
              <Transactions />
            }
          />

          <Route
            path="deposit"
            element={
              <Deposit />
            }
          />

          <Route
            path="withdraw"
            element={
              <Withdraw />
            }
          />

          <Route
            path="ai-trading"
            element={
              <AITrading />
            }
          />

          <Route
            path="copy-trading"
            element={
              <CopyTrading />
            }
          />

          <Route
            path="staking"
            element={
              <Staking />
            }
          />

          <Route
            path="p2p"
            element={<P2P />}
          />

          <Route
            path="referrals"
            element={
              <Referrals />
            }
          />

          <Route
            path="admin"
            element={<Admin />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;