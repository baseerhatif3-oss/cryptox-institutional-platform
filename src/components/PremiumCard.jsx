const PremiumCard = ({
  title,
  value,
  subtitle,
  color,
}) => {

  return (

    <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-yellow-400/30 transition-all duration-300">

      <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">

        <p className="text-zinc-400 mb-4">
          {title}
        </p>

        <h2 className={`text-5xl font-black ${color}`}>

          {value}

        </h2>

        <p className="text-zinc-500 mt-4">
          {subtitle}
        </p>

      </div>

    </div>
  );
};

export default PremiumCard;