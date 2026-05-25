import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";

import ProtectedRoute from "./components/ProtectedRoute";

import LoadingSpinner from "./components/LoadingSpinner";

const Login =
  lazy(() =>
    import("./pages/Login")
  );

const Register =
  lazy(() =>
    import("./pages/Register")
  );

const Dashboard =
  lazy(() =>
    import("./pages/Dashboard")
  );

const Markets =
  lazy(() =>
    import("./pages/Markets")
  );

const Trading =
  lazy(() =>
    import("./pages/Trading")
  );

const Futures =
  lazy(() =>
    import("./pages/Futures")
  );

const CopyTrading =
  lazy(() =>
    import("./pages/CopyTrading")
  );

const Wallet =
  lazy(() =>
    import("./pages/Wallet")
  );

const Orders =
  lazy(() =>
    import("./pages/Orders")
  );

const Transactions =
  lazy(() =>
    import("./pages/Transactions")
  );

const Deposit =
  lazy(() =>
    import("./pages/Deposit")
  );

const Withdraw =
  lazy(() =>
    import("./pages/Withdraw")
  );

const Notifications =
  lazy(() =>
    import("./pages/Notifications")
  );

const Admin =
  lazy(() =>
    import("./pages/Admin")
  );

const KYC =
  lazy(() =>
    import("./pages/KYC")
  );

const SecurityCenter =
  lazy(() =>
    import("./pages/SecurityCenter")
  );

const AISignals =
  lazy(() =>
    import("./pages/AISignals")
  );

const Staking =
  lazy(() =>
    import("./pages/Staking")
  );

const Leaderboard =
  lazy(() =>
    import("./pages/Leaderboard")
  );

const Referral =
  lazy(() =>
    import("./pages/Referral")
  );

const Security =
  lazy(() =>
    import("./pages/Security")
  );

const Settings =
  lazy(() =>
    import("./pages/Settings")
  );

const ErrorPage =
  lazy(() =>
    import("./pages/ErrorPage")
  );

function App() {

  return (

    <BrowserRouter>

      <Suspense
        fallback={
          <LoadingSpinner />
        }
      >

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
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
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
            path="/futures"
            element={
              <ProtectedRoute>
                <Futures />
              </ProtectedRoute>
            }
          />

          <Route
            path="/copy-trading"
            element={
              <ProtectedRoute>
                <CopyTrading />
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
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/deposit"
            element={
              <ProtectedRoute>
                <Deposit />
              </ProtectedRoute>
            }
          />

          <Route
            path="/withdraw"
            element={
              <ProtectedRoute>
                <Withdraw />
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
            path="/kyc"
            element={
              <ProtectedRoute>
                <KYC />
              </ProtectedRoute>
            }
          />

          <Route
            path="/security-center"
            element={
              <ProtectedRoute>
                <SecurityCenter />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ai-signals"
            element={
              <ProtectedRoute>
                <AISignals />
              </ProtectedRoute>
            }
          />

          <Route
            path="/staking"
            element={
              <ProtectedRoute>
                <Staking />
              </ProtectedRoute>
            }
          />

          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/referral"
            element={
              <ProtectedRoute>
                <Referral />
              </ProtectedRoute>
            }
          />

          <Route
            path="/security"
            element={
              <ProtectedRoute>
                <Security />
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
            path="*"
            element={<ErrorPage />}
          />

        </Routes>

      </Suspense>

    </BrowserRouter>
  );
}

export default App;