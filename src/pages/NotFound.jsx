import {
  Link,
} from "react-router-dom";

const NotFound = () => {

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-[160px] font-black text-yellow-400 leading-none mb-6">

          404

        </h1>

        <h2 className="text-5xl font-black mb-6">

          Page Not Found

        </h2>

        <p className="text-zinc-500 text-xl mb-10 max-w-2xl">

          The requested institutional resource could not be located.

        </p>

        <Link
          to="/dashboard"
          className="bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-10 py-5 rounded-3xl font-black text-xl inline-flex"
        >

          Return To Platform

        </Link>

      </div>

    </div>

  );
};

export default NotFound;