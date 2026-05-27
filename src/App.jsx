import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Trading from "./pages/Trading";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function LandingPage() {

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-green-500/10"></div>

      <div className="absolute w-[600px] h-[600px] bg-yellow-400/10 blur-[150px] rounded-full top-[-200px] left-[-200px]"></div>

      <div className="absolute w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full bottom-[-200px] right-[-200px]"></div>

      <div className="relative z-10">

        <nav className="flex items-center justify-between px-8 py-8 border-b border-white/5">

          <h1 className="text-4xl font-black">

            CryptoX

          </h1>

          <div className="flex items-center gap-4">

            <a
              href="/login"
              className="px-6 py-3 rounded-2xl border border-white/10 hover:border-yellow-400 transition-all"
            >

              Login

            </a>

            <a
              href="/register"
              className="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-black hover:bg-yellow-300 transition-all"
            >

              Get Started

            </a>

          </div>

        </nav>

        <section className="max-w-7xl mx-auto px-8 pt-24 pb-20">

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">

            <div>

              <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-full mb-8">

                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

                <span className="text-green-400 font-bold">

                  LIVE EXCHANGE INFRASTRUCTURE

                </span>

              </div>

              <h1 className="text-7xl xl:text-8xl font-black leading-tight mb-10">

                The Future
                <span className="text-yellow-400">
                  {" "}of Crypto
                </span>
                <br />
                Trading

              </h1>

              <p className="text-zinc-400 text-2xl leading-relaxed mb-12 max-w-2xl">

                Institutional-grade digital asset trading ecosystem with real-time analytics, advanced portfolio management, and enterprise infrastructure.

              </p>

              <div className="flex flex-col sm:flex-row gap-5">

                <a
                  href="/register"
                  className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-10 py-5 rounded-3xl font-black text-xl shadow-2xl shadow-yellow-400/20 text-center"
                >

                  Launch Platform

                </a>

                <a
                  href="/login"
                  className="border border-white/10 hover:border-yellow-400 transition-all px-10 py-5 rounded-3xl font-black text-xl text-center"
                >

                  View Demo

                </a>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="glass rounded-[32px] p-8">

                <h2 className="text-5xl font-black text-yellow-400 mb-4">

                  $12.4B

                </h2>

                <p className="text-zinc-500 text-lg">

                  24H Trading Volume

                </p>

              </div>

              <div className="glass rounded-[32px] p-8 mt-10">

                <h2 className="text-5xl font-black text-green-400 mb-4">

                  1.2M+

                </h2>

                <p className="text-zinc-500 text-lg">

                  Active Traders

                </p>

              </div>

              <div className="glass rounded-[32px] p-8 -mt-4">

                <h2 className="text-5xl font-black text-blue-400 mb-4">

                  99.99%

                </h2>

                <p className="text-zinc-500 text-lg">

                  System Uptime

                </p>

              </div>

              <div className="glass rounded-[32px] p-8 mt-6">

                <h2 className="text-5xl font-black text-purple-400 mb-4">

                  150+

                </h2>

                <p className="text-zinc-500 text-lg">

                  Supported Assets

                </p>

              </div>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
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
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;