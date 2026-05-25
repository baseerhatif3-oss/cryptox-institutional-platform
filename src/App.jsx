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
          element={<Dashboard />}
        />

        <Route
          path="/notifications"
          element={<Notifications />}
        />

        <Route
          path="/markets"
          element={<Markets />}
        />

        <Route
          path="/trading"
          element={<Trading />}
        />

        <Route
          path="/futures"
          element={<Futures />}
        />

        <Route
          path="/copy-trading"
          element={<CopyTrading />}
        />

        <Route
          path="/wallet"
          element={<Wallet />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/transactions"
          element={<Transactions />}
        />

        <Route
          path="/deposit"
          element={<Deposit />}
        />

        <Route
          path="/withdraw"
          element={<Withdraw />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/kyc"
          element={<KYC />}
        />

        <Route
          path="/security-center"
          element={<SecurityCenter />}
        />

        <Route
          path="/ai-signals"
          element={<AISignals />}
        />

        <Route
          path="/staking"
          element={<Staking />}
        />

        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />

        <Route
          path="/referral"
          element={<Referral />}
        />

        <Route
          path="/security"
          element={<Security />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;