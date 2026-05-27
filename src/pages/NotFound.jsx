import {
  Link,
} from "react-router-dom";

const NotFound = () => {

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-[180px] font-black leading-none text-yellow-400 mb-6">

          404

        </h1>

        <h2 className="text-6xl font-black mb-6">

          Market Not Found

        </h2>

        <p className="text-zinc-500 text-2xl mb-12 leading-relaxed">

          The requested trading infrastructure endpoint could not be located.

        </p>

        <Link
          to="/"
          className="inline-flex bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-10 py-5 rounded-3xl font-black text-xl"
        >

          Return Home

        </Link>

      </div>

    </div>
  );
};

export default NotFound;