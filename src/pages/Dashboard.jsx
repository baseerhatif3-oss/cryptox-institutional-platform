import React, {
  useEffect,
  useState,
} from "react";

import { io } from "socket.io-client";

import API from "../api";

const socket = io(
  "http://localhost:5000"
);

function Dashboard() {
  const [wallet, setWallet] =
    useState(null);

  const [orders, setOrders] =
    useState([]);

  const [amount, setAmount] =
    useState("");

  const [btcPrice, setBtcPrice] =
    useState(50000);

  const [loading, setLoading] =
    useState(false);

  const [liveStatus, setLiveStatus] =
    useState("Connecting...");

  const userInfo = JSON.parse(
    localStorage.getItem(
      "userInfo"
    )
  );

  /* SOCKET */

  useEffect(() => {
    socket.on(
      "connect",
      () => {
        setLiveStatus(
          "Live Connected"
        );
      }
    );

    socket.on(
      "disconnect",
      () => {
        setLiveStatus(
          "Disconnected"
        );
      }
    );

    socket.on(
      "priceUpdate",
      (data) => {
        setBtcPrice(
          data.price
        );
      }
    );

    return () => {
      socket.off(
        "priceUpdate"
      );
    };
  }, []);

  /* INITIAL */

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =
    async () => {
      await fetchWallet();
      await fetchOrders();
      await fetchBTCPrice();
    };

  /* BTC PRICE */

  const fetchBTCPrice =
    async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );

        const data =
          await res.json();

        const price =
          data.bitcoin.usd;

        setBtcPrice(price);

        socket.emit(
          "priceUpdate",
          {
            price,
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

  /* WALLET */

  const fetchWallet =
    async () => {
      try {
        const { data } =
          await API.get(
            "/trade/wallet"
          );

        setWallet(data);
      } catch (error) {
        console.log(error);
      }
    };

  /* ORDERS */

  const fetchOrders =
    async () => {
      try {
        const { data } =
          await API.get(
            "/trade/orders"
          );

        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

  /* BUY */

  const buyBTC = async () => {
    try {
      setLoading(true);

      await API.post(
        "/trade/buy",
        {
          amount:
            Number(amount),

          price: btcPrice,
        }
      );

      await fetchData();

      setAmount("");

      alert(
        "BUY Order Executed"
      );
    } catch (error) {
      alert(
        error?.response?.data
          ?.message
      );
    } finally {
      setLoading(false);
    }
  };

  /* SELL */

  const sellBTC =
    async () => {
      try {
        setLoading(true);

        await API.post(
          "/trade/sell",
          {
            amount:
              Number(amount),

            price: btcPrice,
          }
        );

        await fetchData();

        setAmount("");

        alert(
          "SELL Order Created"
        );
      } catch (error) {
        alert(
          error?.response?.data
            ?.message
        );
      } finally {
        setLoading(false);
      }
    };

  /* CANCEL */

  const cancelOrder =
    async (id) => {
      try {
        await API.delete(
          `/trade/cancel/${id}`
        );

        fetchData();

        alert(
          "Order Cancelled"
        );
      } catch (error) {
        alert(
          error?.response?.data
            ?.message
        );
      }
    };

  const buyOrders =
    orders.filter(
      (o) => o.type === "BUY"
    );

  const sellOrders =
    orders.filter(
      (o) => o.type === "SELL"
    );

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          padding: "20px 40px",
          background: "#111827",
          borderBottom:
            "1px solid #1e293b",
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              color: "#22c55e",
              margin: 0,
            }}
          >
            CryptoX Exchange
          </h1>

          <p
            style={{
              color:
                liveStatus ===
                "Live Connected"
                  ? "#22c55e"
                  : "#ef4444",
            }}
          >
            {liveStatus}
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem(
              "userInfo"
            );

            window.location.href =
              "/login";
          }}
          style={logoutBtn}
        >
          Logout
        </button>
      </div>

      {/* TOP */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap: "20px",
          padding: "40px",
        }}
      >
        <div style={card}>
          <h3>USDT</h3>

          <h1>
            $
            {wallet?.USDT?.toFixed(
              2
            ) || 0}
          </h1>
        </div>

        <div style={card}>
          <h3>BTC</h3>

          <h1>
            {wallet?.BTC?.toFixed(
              6
            ) || 0}
          </h1>
        </div>

        <div style={card}>
          <h3>BTC Price</h3>

          <h1>
            ${btcPrice}
          </h1>
        </div>
      </div>

      {/* MAIN */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "20px",
          padding:
            "0 40px 40px",
        }}
      >
        {/* LEFT */}

        <div>
          {/* TRADE */}

          <div style={box}>
            <h2>
              Trade BTC
            </h2>

            <input
              type="number"
              placeholder="BTC Amount"
              value={amount}
              onChange={(e) =>
                setAmount(
                  e.target.value
                )
              }
              style={input}
            />

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={
                  buyBTC
                }
                disabled={
                  loading
                }
                style={buyBtn}
              >
                Buy
              </button>

              <button
                onClick={
                  sellBTC
                }
                disabled={
                  loading
                }
                style={sellBtn}
              >
                Sell
              </button>
            </div>
          </div>

          {/* CHART */}

          <div
            style={{
              ...box,
              marginTop: "20px",
              overflow:
                "hidden",
            }}
          >
            <iframe
              title="chart"
              src="https://s.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=15&theme=dark"
              width="100%"
              height="500"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        {/* RIGHT */}

        <div>
          {/* BUY ORDERS */}

          <div style={box}>
            <h2
              style={{
                color:
                  "#22c55e",
              }}
            >
              Buy Orders
            </h2>

            {buyOrders.map(
              (order) => (
                <div
                  key={
                    order._id
                  }
                  style={
                    orderRow
                  }
                >
                  <div>
                    <p>
                      {
                        order.user
                          ?.name
                      }
                    </p>

                    <small>
                      {
                        order.amount
                      }{" "}
                      BTC
                    </small>
                  </div>

                  <div>
                    <p>
                      $
                      {
                        order.price
                      }
                    </p>

                    <small>
                      {
                        order.status
                      }
                    </small>
                  </div>

                  {order.status ===
                    "OPEN" && (
                    <button
                      onClick={() =>
                        cancelOrder(
                          order._id
                        )
                      }
                      style={
                        cancelBtn
                      }
                    >
                      X
                    </button>
                  )}
                </div>
              )
            )}
          </div>

          {/* SELL ORDERS */}

          <div
            style={{
              ...box,
              marginTop: "20px",
            }}
          >
            <h2
              style={{
                color:
                  "#ef4444",
              }}
            >
              Sell Orders
            </h2>

            {sellOrders.map(
              (order) => (
                <div
                  key={
                    order._id
                  }
                  style={
                    orderRow
                  }
                >
                  <div>
                    <p>
                      {
                        order.user
                          ?.name
                      }
                    </p>

                    <small>
                      {
                        order.amount
                      }{" "}
                      BTC
                    </small>
                  </div>

                  <div>
                    <p>
                      $
                      {
                        order.price
                      }
                    </p>

                    <small>
                      {
                        order.status
                      }
                    </small>
                  </div>

                  {order.status ===
                    "OPEN" && (
                    <button
                      onClick={() =>
                        cancelOrder(
                          order._id
                        )
                      }
                      style={
                        cancelBtn
                      }
                    >
                      X
                    </button>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "#111827",
  padding: "25px",
  borderRadius: "15px",
};

const box = {
  background: "#111827",
  padding: "25px",
  borderRadius: "20px",
};

const input = {
  width: "100%",
  padding: "15px",
  marginTop: "20px",
  borderRadius: "10px",
  border: "none",
  background: "#1e293b",
  color: "white",
  boxSizing: "border-box",
};

const buyBtn = {
  flex: 1,
  background: "#22c55e",
  color: "white",
  border: "none",
  padding: "15px",
  borderRadius: "10px",
  cursor: "pointer",
};

const sellBtn = {
  flex: 1,
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "15px",
  borderRadius: "10px",
  cursor: "pointer",
};

const logoutBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  cursor: "pointer",
};

const orderRow = {
  background: "#1e293b",
  padding: "15px",
  borderRadius: "12px",
  marginTop: "15px",
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
};

const cancelBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "8px 12px",
  cursor: "pointer",
};

export default Dashboard;