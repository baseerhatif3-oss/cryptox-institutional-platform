import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Trading from "./pages/Trading";
import Wallet from "./pages/Wallet";
import Orders from "./pages/Orders";
import Transactions from "./pages/Transactions";

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
            <Navigate
              to="/dashboard"
            />
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
          path="/trading"
          element={<Trading />}
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