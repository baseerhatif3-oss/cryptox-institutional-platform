const stats = [

  {
    title:
      "Total Volume",

    value:
      "$12.4B",
  },

  {
    title:
      "Active Traders",

    value:
      "1.2M+",
  },

  {
    title:
      "Orders Today",

    value:
      "842K",
  },

  {
    title:
      "Assets Listed",

    value:
      "150+",
  },
];

const StatsGrid = () => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

      {
        stats.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="glass rounded-3xl p-8"
            >

              <p className="text-zinc-500 mb-4 text-lg">

                {
                  item.title
                }

              </p>

              <h2 className="text-5xl font-black text-yellow-400">

                {
                  item.value
                }

              </h2>

            </div>
          )
        )
      }

    </div>
  );
};

export default StatsGrid;