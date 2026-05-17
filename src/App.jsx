import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Portfolio from "./pages/Portfolio";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";

import DashboardLayout from "./layouts/DashboardLayout";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

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
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="wallet" element={<Wallet />} />

          <Route path="portfolio" element={<Portfolio />} />

          <Route
            path="transactions"
            element={<Transactions />}
          />

          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;