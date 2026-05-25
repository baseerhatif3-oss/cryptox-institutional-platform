const OrderBook = () => {

  const sellOrders = [

    {
      price: "84,520",
      amount: "0.842",
    },

    {
      price: "84,510",
      amount: "1.284",
    },

    {
      price: "84,500",
      amount: "0.592",
    },

    {
      price: "84,480",
      amount: "2.140",
    },
  ];

  const buyOrders = [

    {
      price: "84,420",
      amount: "1.120",
    },

    {
      price: "84,400",
      amount: "0.942",
    },

    {
      price: "84,390",
      amount: "2.510",
    },

    {
      price: "84,360",
      amount: "1.784",
    },
  ];

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-black">
          Order Book
        </h2>

        <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">

          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 text-xs font-bold">
            LIVE
          </span>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <h3 className="text-red-400 font-black mb-4">
            Sell Orders
          </h3>

          <div className="space-y-3">

            {
              sellOrders.map(
                (order, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between bg-black rounded-xl px-4 py-3"
                  >

                    <span className="text-red-400 font-bold">

                      ${order.price}

                    </span>

                    <span className="text-white">

                      {order.amount}

                    </span>

                  </div>
                )
              )
            }

          </div>

        </div>

        <div>

          <h3 className="text-green-400 font-black mb-4">
            Buy Orders
          </h3>

          <div className="space-y-3">

            {
              buyOrders.map(
                (order, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between bg-black rounded-xl px-4 py-3"
                  >

                    <span className="text-green-400 font-bold">

                      ${order.price}

                    </span>

                    <span className="text-white">

                      {order.amount}

                    </span>

                  </div>
                )
              )
            }

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrderBook;