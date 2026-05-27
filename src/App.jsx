import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Portfolio from "./pages/Portfolio";
import Futures from "./pages/Futures";
import Staking from "./pages/Staking";
import NFTMarketplace from "./pages/NFTMarketplace";
import Launchpad from "./pages/Launchpad";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";
import SecurityCenter from "./pages/SecurityCenter";
import DemoAccount from "./pages/DemoAccount";
import DemoCredentials from "./pages/DemoCredentials";
import SystemStatus from "./pages/SystemStatus";
import CryptoCard from "./pages/CryptoCard";
import Trading from "./pages/Trading";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8">
      <h1 className="text-7xl font-black">
        CryptoX 🚀
      </h1>

      <a
        href="/dashboard"
        className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-2xl"
      >
        Enter Exchange
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
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
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/markets"
          element={<Trading />}
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
          path="/staking"
          element={<Staking />}
        />

        <Route
          path="/nft"
          element={<NFTMarketplace />}
        />

        <Route
          path="/launchpad"
          element={<Launchpad />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

        <Route
          path="/trust-center"
          element={<SecurityCenter />}
        />

        <Route
          path="/demo"
          element={<DemoAccount />}
        />

        <Route
          path="/demo-credentials"
          element={<DemoCredentials />}
        />

        <Route
          path="/system-status"
          element={<SystemStatus />}
        />

        <Route
          path="/crypto-card"
          element={<CryptoCard />}
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;