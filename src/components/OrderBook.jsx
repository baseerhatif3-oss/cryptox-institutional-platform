import React from "react";

const OrderBook = () => {

  const sellOrders = [

    {
      price: "84,820",
      amount: "0.82",
      total: "69,552",
    },

    {
      price: "84,760",
      amount: "1.24",
      total: "105,102",
    },

    {
      price: "84,700",
      amount: "0.65",
      total: "55,055",
    },
  ];

  const buyOrders = [

    {
      price: "84,520",
      amount: "1.12",
      total: "94,662",
    },

    {
      price: "84,480",
      amount: "2.24",
      total: "189,235",
    },

    {
      price: "84,420",
      amount: "0.92",
      total: "77,666",
    },
  ];

  return (

    <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

      <div className="p-6 border-b border-white/10">

        <h2 className="text-2xl font-black">
          Order Book
        </h2>

      </div>

      {/* HEADER */}

      <div className="grid grid-cols-3 px-6 py-4 text-sm text-gray-400 border-b border-white/5">

        <div>Price</div>

        <div className="text-center">
          Amount
        </div>

        <div className="text-right">
          Total
        </div>

      </div>

      {/* SELL ORDERS */}

      <div>

        {sellOrders.map(
          (
            order,
            index
          ) => (

            <div
              key={index}
              className="grid grid-cols-3 px-6 py-3 text-sm hover:bg-red-500/5 transition"
            >

              <div className="text-red-400 font-bold">
                {order.price}
              </div>

              <div className="text-center">
                {order.amount}
              </div>

              <div className="text-right">
                {order.total}
              </div>

            </div>

          )
        )}

      </div>

      {/* CURRENT PRICE */}

      <div className="px-6 py-5 border-y border-white/10 text-center">

        <h3 className="text-3xl font-black text-yellow-400">
          84,520
        </h3>

        <p className="text-green-400 text-sm mt-1">
          +4.82%
        </p>

      </div>

      {/* BUY ORDERS */}

      <div>

        {buyOrders.map(
          (
            order,
            index
          ) => (

            <div
              key={index}
              className="grid grid-cols-3 px-6 py-3 text-sm hover:bg-green-500/5 transition"
            >

              <div className="text-green-400 font-bold">
                {order.price}
              </div>

              <div className="text-center">
                {order.amount}
              </div>

              <div className="text-right">
                {order.total}
              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default OrderBook;