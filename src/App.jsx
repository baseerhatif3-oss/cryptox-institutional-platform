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

import Dashboard from "./pages/Dashboard";

import Futures from "./pages/Futures";

import Deposit from "./pages/Deposit";

import Withdraw from "./pages/Withdraw";

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
            path="futures"
            element={
              <Futures />
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
            path="admin"
            element={<Admin />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;