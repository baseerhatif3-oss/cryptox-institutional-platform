const sellOrders = [

  {
    price: "84,620",
    amount: "0.52",
  },

  {
    price: "84,590",
    amount: "0.41",
  },

  {
    price: "84,560",
    amount: "0.88",
  },
];

const buyOrders = [

  {
    price: "84,500",
    amount: "0.91",
  },

  {
    price: "84,480",
    amount: "1.22",
  },

  {
    price: "84,450",
    amount: "0.63",
  },
];

const OrderBook = () => {

  return (

    <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6">

      <h2 className="text-3xl font-black text-white mb-8">
        Order Book
      </h2>

      <div className="space-y-3">

        {
          sellOrders.map(
            (order, index) => (

              <div
                key={index}
                className="flex justify-between text-red-400 bg-black rounded-xl px-4 py-3"
              >

                <span>
                  {order.price}
                </span>

                <span>
                  {order.amount}
                </span>

              </div>
            )
          )
        }

      </div>

      <div className="text-center py-6">

        <h2 className="text-4xl font-black text-white">
          $84,520
        </h2>

      </div>

      <div className="space-y-3">

        {
          buyOrders.map(
            (order, index) => (

              <div
                key={index}
                className="flex justify-between text-green-400 bg-black rounded-xl px-4 py-3"
              >

                <span>
                  {order.price}
                </span>

                <span>
                  {order.amount}
                </span>

              </div>
            )
          )
        }

      </div>

    </div>
  );
};

export default OrderBook;