import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Wallet from "./pages/Wallet";
import Transactions from "./pages/Transactions";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/portfolio"
            element={<Portfolio />}
          />

          <Route
            path="/wallet"
            element={<Wallet />}
          />

          <Route
            path="/transactions"
            element={<Transactions />}
          />

          <Route
            path="/watchlist"
            element={<Watchlist />}
          />
        </Route>

        <Route
          path="*"
          element={
            <Navigate to="/dashboard" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;