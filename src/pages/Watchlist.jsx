import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

function Watchlist() {
  const [coins, setCoins] =
    useState([]);

  useEffect(() => {
    fetchCoins();

    const interval =
      setInterval(() => {
        fetchCoins();
      }, 10000);

    return () =>
      clearInterval(interval);
  }, []);

  /* FETCH */

  const fetchCoins =
    async () => {
      try {
        const response =
          await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,ripple,dogecoin"
          );

        const data =
          await response.json();

        setCoins(data);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft:
            window.innerWidth >
            768
              ? "250px"
              : "0px",
          marginTop: "80px",
          padding: "30px",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <h1>
          Watchlist
        </h1>

        <p>
          Track market movers
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {coins.map(
            (coin) => (
              <div
                key={coin.id}
                style={{
                  background:
                    "linear-gradient(135deg,#0f172a,#1e293b)",
                  padding:
                    "25px",
                  borderRadius:
                    "20px",
                  display:
                    "flex",
                  justifyContent:
                    "space-between",
                  alignItems:
                    "center",
                  flexWrap:
                    "wrap",
                  gap: "20px",
                }}
              >
                {/* LEFT */}

                <div
                  style={{
                    display:
                      "flex",
                    alignItems:
                      "center",
                    gap: "15px",
                  }}
                >
                  <img
                    src={
                      coin.image
                    }
                    alt={
                      coin.name
                    }
                    style={{
                      width:
                        "45px",
                    }}
                  />

                  <div>
                    <h2>
                      {
                        coin.symbol
                      }
                    </h2>

                    <p>
                      {
                        coin.name
                      }
                    </p>
                  </div>
                </div>

                {/* RIGHT */}

                <div>
                  <h2>
                    $
                    {coin.current_price.toLocaleString()}
                  </h2>

                  <p
                    style={{
                      color:
                        coin.price_change_percentage_24h >=
                        0
                          ? "#22c55e"
                          : "#ef4444",
                      fontWeight:
                        "bold",
                    }}
                  >
                    {coin.price_change_percentage_24h.toFixed(
                      2
                    )}
                    %
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;