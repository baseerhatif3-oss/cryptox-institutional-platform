import {
  Link,
} from "react-router-dom";

const ErrorPage = () => {

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden relative">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.08),transparent_50%)]"></div>

      <div className="relative z-10 text-center max-w-3xl">

        <div className="text-[140px] font-black text-yellow-400 leading-none mb-6">

          404

        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-6">

          Page Not Found

        </h1>

        <p className="text-zinc-500 text-xl leading-relaxed mb-10">

          The requested page does not exist on the CryptoX exchange platform.

        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

          <Link
            to="/"
            className="bg-yellow-400 hover:bg-yellow-300 transition-all px-10 py-5 rounded-2xl text-black font-black text-xl"
          >

            Back to Homepage

          </Link>

          <Link
            to="/dashboard"
            className="glass px-10 py-5 rounded-2xl font-black text-xl"
          >

            Open Dashboard

          </Link>

        </div>

      </div>

    </div>
  );
};

export default ErrorPage;