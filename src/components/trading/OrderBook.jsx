const OrderBook = () => {

  const buyOrders = [

    {
      price: 84320,
      amount: 0.42,
    },

    {
      price: 84310,
      amount: 0.31,
    },

    {
      price: 84300,
      amount: 0.88,
    },

    {
      price: 84280,
      amount: 1.24,
    },
  ];

  const sellOrders = [

    {
      price: 84340,
      amount: 0.25,
    },

    {
      price: 84350,
      amount: 0.62,
    },

    {
      price: 84360,
      amount: 0.91,
    },

    {
      price: 84380,
      amount: 1.44,
    },
  ];

  return (

    <div className="glass rounded-3xl p-6 h-full">

      <h2 className="text-3xl font-black mb-6">

        Live Orderbook

      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <h3 className="text-green-400 font-black text-xl mb-4">

            BUY ORDERS

          </h3>

          <div className="space-y-3">

            {
              buyOrders.map(
                (
                  order,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-black/30 rounded-2xl p-4"
                  >

                    <div className="flex justify-between">

                      <span className="text-green-400 font-black">

                        $
                        {
                          order.price
                        }

                      </span>

                      <span className="text-zinc-400">

                        {
                          order.amount
                        } BTC

                      </span>

                    </div>

                  </div>
                )
              )
            }

          </div>

        </div>

        <div>

          <h3 className="text-red-400 font-black text-xl mb-4">

            SELL ORDERS

          </h3>

          <div className="space-y-3">

            {
              sellOrders.map(
                (
                  order,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-black/30 rounded-2xl p-4"
                  >

                    <div className="flex justify-between">

                      <span className="text-red-400 font-black">

                        $
                        {
                          order.price
                        }

                      </span>

                      <span className="text-zinc-400">

                        {
                          order.amount
                        } BTC

                      </span>

                    </div>

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