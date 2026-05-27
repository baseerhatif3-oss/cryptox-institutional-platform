import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import Landing from "./pages/Landing";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Markets from "./pages/Markets";

import Trading from "./pages/Trading";

import Portfolio from "./pages/Portfolio";

import Wallet from "./pages/Wallet";

import Admin from "./pages/Admin";

import Settings from "./pages/Settings";

import NFTMarketplace from "./pages/NFTMarketplace";

import Launchpad from "./pages/Launchpad";

import NotFound from "./pages/NotFound";

import Loader from "./components/ui/Loader";

import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setLoading(false);

      }, 1800);

    return () =>
      clearTimeout(timer);

  }, []);

  if (loading) {

    return <Loader />;
  }

  return (

    <BrowserRouter>

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
          path="/trading"
          element={
            <ProtectedRoute>

              <Trading />

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
          path="/wallet"
          element={
            <ProtectedRoute>

              <Wallet />

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
          path="/settings"
          element={
            <ProtectedRoute>

              <Settings />

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
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;