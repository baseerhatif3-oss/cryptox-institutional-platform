import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import Loader from "./components/ui/Loader";

import Landing from "./pages/Landing";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Markets from "./pages/Markets";

import Trading from "./pages/Trading";

import Portfolio from "./pages/Portfolio";

import Wallet from "./pages/Wallet";

import NFTMarketplace from "./pages/NFTMarketplace";

import Launchpad from "./pages/Launchpad";

import Admin from "./pages/Admin";

import Settings from "./pages/Settings";

const App = () => {

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
          element={
            <Landing />
          }
        />

        <Route
          path="/login"
          element={
            <Login />
          }
        />

        <Route
          path="/register"
          element={
            <Register />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard />
          }
        />

        <Route
          path="/markets"
          element={
            <Markets />
          }
        />

        <Route
          path="/trading"
          element={
            <Trading />
          }
        />

        <Route
          path="/portfolio"
          element={
            <Portfolio />
          }
        />

        <Route
          path="/wallet"
          element={
            <Wallet />
          }
        />

        <Route
          path="/nft"
          element={
            <NFTMarketplace />
          }
        />

        <Route
          path="/launchpad"
          element={
            <Launchpad />
          }
        />

        <Route
          path="/admin"
          element={
            <Admin />
          }
        />

        <Route
          path="/settings"
          element={
            <Settings />
          }
        />

        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;