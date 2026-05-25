import {
  Link,
} from "react-router-dom";

const ErrorPage = () => {

  return (

    <div className="min-h-screen bg-black flex items-center justify-center p-5">

      <div className="text-center">

        <h1 className="text-8xl font-black text-yellow-400 mb-5">

          404

        </h1>

        <h2 className="text-4xl font-black mb-5">

          Page Not Found

        </h2>

        <p className="text-zinc-500 mb-8">

          The page you are looking for does not exist.

        </p>

        <Link
          to="/dashboard"
          className="bg-yellow-400 hover:bg-yellow-300 transition-all px-8 py-4 rounded-2xl text-black font-black"
        >

          Go Dashboard

        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;