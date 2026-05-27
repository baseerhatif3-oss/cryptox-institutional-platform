import {
  Link,
} from "react-router-dom";

const NotFound = () => {

  return (

    <div className="min-h-screen bg-black flex items-center justify-center text-white px-6">

      <div className="text-center">

        <h1 className="text-9xl font-black text-yellow-400 mb-8">

          404

        </h1>

        <h2 className="text-5xl font-black mb-6">

          Page Not Found

        </h2>

        <p className="text-zinc-500 text-xl mb-10 max-w-2xl">

          The requested trading resource could not be located on the CryptoX infrastructure.

        </p>

        <Link
          to="/dashboard"
          className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-10 py-5 rounded-2xl font-black text-xl"
        >

          Return to Exchange

        </Link>

      </div>

    </div>
  );
};

export default NotFound;