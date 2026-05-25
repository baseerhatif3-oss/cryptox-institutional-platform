import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import OpenOrders from "./pages/OpenOrders";
import Trading from "./pages/Trading";
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
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/wallet"
          element={<Wallet />}
        />

        <Route
          path="/orders"
          element={<OpenOrders />}
        />

        <Route
          path="/trading"
          element={<Trading />}
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