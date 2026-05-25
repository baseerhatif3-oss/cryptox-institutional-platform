const activities = [

  {
    title: "Bought BTC",
    amount: "$12,000",
    type: "buy",
  },

  {
    title: "Sold ETH",
    amount: "$4,500",
    type: "sell",
  },

  {
    title: "Deposited USDT",
    amount: "$25,000",
    type: "deposit",
  },
];

const RecentActivity = () => {

  return (

    <div className="bg-[#0d0d0d] border border-yellow-500/10 rounded-3xl p-6">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-black">
            Recent Activity
          </h2>

          <p className="text-zinc-500">
            Latest account activity
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {
          activities.map((item, index) => (

            <div
              key={index}
              className="flex justify-between items-center bg-black rounded-2xl p-5"
            >

              <div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-zinc-500">
                  Completed
                </p>

              </div>

              <div className={`font-bold ${
                item.type === "sell"
                  ? "text-red-400"
                  : "text-green-400"
              }`}>

                {item.amount}

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
};

export default RecentActivity;