import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";
import Trading from "./pages/Trading";
import Futures from "./pages/Futures";
import CopyTrading from "./pages/CopyTrading";

import Wallet from "./pages/Wallet";
import Orders from "./pages/Orders";
import Transactions from "./pages/Transactions";

import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";

import Notifications from "./pages/Notifications";

import Admin from "./pages/Admin";
import KYC from "./pages/KYC";

import SecurityCenter from "./pages/SecurityCenter";

import AISignals from "./pages/AISignals";
import Staking from "./pages/Staking";
import Leaderboard from "./pages/Leaderboard";
import Referral from "./pages/Referral";
import Security from "./pages/Security";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/ProtectedRoute";

import ErrorPage from "./pages/ErrorPage";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Navigate to="/dashboard" />
          }
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
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
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
          path="/copy-trading"
          element={
            <ProtectedRoute>
              <CopyTrading />
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
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
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
          path="/deposit"
          element={
            <ProtectedRoute>
              <Deposit />
            </ProtectedRoute>
          }
        />

        <Route
          path="/withdraw"
          element={
            <ProtectedRoute>
              <Withdraw />
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

        <Route
          path="/kyc"
          element={
            <ProtectedRoute>
              <KYC />
            </ProtectedRoute>
          }
        />

        <Route
          path="/security-center"
          element={
            <ProtectedRoute>
              <SecurityCenter />
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
          path="/staking"
          element={
            <ProtectedRoute>
              <Staking />
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
          path="/referral"
          element={
            <ProtectedRoute>
              <Referral />
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
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<ErrorPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;