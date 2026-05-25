const PortfolioCard = ({
  title,
  value,
  change,
}) => {

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <p className="text-zinc-500 mb-4">
        {title}
      </p>

      <h2 className="text-4xl font-black">
        {value}
      </h2>

      <p className="text-green-400 font-bold mt-4">
        {change}
      </p>

    </div>
  );
};

export default PortfolioCard;