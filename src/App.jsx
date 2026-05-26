import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";
import Trading from "./pages/Trading";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import SystemStatus from "./pages/SystemStatus";
import DemoAccount from "./pages/DemoAccount";
import AdminDashboard from "./pages/AdminDashboard";
import TrustCenter from "./pages/TrustCenter";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

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
          path="/settings"
          element={
            <ProtectedRoute>

              <Settings />

            </ProtectedRoute>
          }
        />

        <Route
          path="/system-status"
          element={
            <ProtectedRoute>

              <SystemStatus />

            </ProtectedRoute>
          }
        />

        <Route
          path="/demo"
          element={
            <ProtectedRoute>

              <DemoAccount />

            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>

              <AdminDashboard />

            </ProtectedRoute>
          }
        />

        <Route
          path="/trust-center"
          element={
            <ProtectedRoute>

              <TrustCenter />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;