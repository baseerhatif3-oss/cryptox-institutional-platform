const cards = [

  {
    title: "Portfolio Value",
    value: "$248,540",
    color: "text-yellow-400",
  },

  {
    title: "24H Profit",
    value: "+$12,845",
    color: "text-green-400",
  },

  {
    title: "Assets",
    value: "12",
    color: "text-blue-400",
  },

  {
    title: "Open Orders",
    value: "18",
    color: "text-red-400",
  },
];

const PortfolioCards = () => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {
        cards.map((card) => (

          <div
            key={card.title}
            className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6"
          >

            <p className="text-zinc-400 mb-4">
              {card.title}
            </p>

            <h2 className={`text-5xl font-black ${card.color}`}>
              {card.value}
            </h2>

          </div>
        ))
      }

    </div>
  );
};

export default PortfolioCards;