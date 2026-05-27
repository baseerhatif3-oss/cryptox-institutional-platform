const Contact = () => {

  return (

    <div className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-6xl md:text-8xl font-black mb-8">

          Contact

          <span className="text-yellow-400">

            {" "}CryptoX

          </span>

        </h1>

        <p className="text-zinc-500 text-2xl mb-16">

          Enterprise support and institutional partnerships.

        </p>

        <div className="glass rounded-[40px] p-10 space-y-8">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5"
          ></textarea>

          <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-5 rounded-2xl font-black text-xl">

            Send Message

          </button>

        </div>

      </div>

    </div>

  );
};

export default Contact;