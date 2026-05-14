import React, {
  useEffect,
  useState,
} from "react";

import API from "../api";

function Portfolio() {
  const [wallet, setWallet] =
    useState(null);

  const [btcPrice, setBtcPrice] =
    useState(0);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  /* FETCH DATA */

  const fetchData =
    async () => {
      try {
        const walletRes =
          await API.get(
            "/trade/wallet"
          );

        setWallet(
          walletRes.data
        );

        const response =
          await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
          );

        const data =
          await response.json();

        setBtcPrice(
          data.bitcoin.usd
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const btcValue =
    (wallet?.BTC || 0) *
    btcPrice;

  const totalValue =
    (wallet?.USDT || 0) +
    btcValue;

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Portfolio
      </h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {/* TOTAL */}

          <div
            style={{
              background:
                "#111827",
              padding: "30px",
              borderRadius:
                "20px",
              marginBottom:
                "30px",
            }}
          >
            <h2>
              Total Portfolio
              Value
            </h2>

            <h1
              style={{
                color:
                  "#22c55e",
                fontSize:
                  "40px",
              }}
            >
              $
              {totalValue.toFixed(
                2
              )}
            </h1>
          </div>

          {/* CARDS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {/* USDT */}

            <div style={card}>
              <h3>
                USDT Balance
              </h3>

              <h1>
                $
                {wallet?.USDT?.toFixed(
                  2
                )}
              </h1>
            </div>

            {/* BTC */}

            <div style={card}>
              <h3>
                Bitcoin Holdings
              </h3>

              <h1>
                {wallet?.BTC?.toFixed(
                  6
                )}{" "}
                BTC
              </h1>

              <p
                style={{
                  color:
                    "#94a3b8",
                }}
              >
                Value: $
                {btcValue.toFixed(
                  2
                )}
              </p>
            </div>

            {/* BTC PRICE */}

            <div style={card}>
              <h3>
                BTC Price
              </h3>

              <h1>
                ${btcPrice}
              </h1>
            </div>
          </div>

          {/* TABLE */}

          <div
            style={{
              background:
                "#111827",
              padding: "30px",
              borderRadius:
                "20px",
              marginTop:
                "30px",
            }}
          >
            <h2>
              Portfolio Assets
            </h2>

            <table
              style={{
                width: "100%",
                marginTop:
                  "20px",
                borderCollapse:
                  "collapse",
              }}
            >
              <thead>
                <tr>
                  <th style={th}>
                    Asset
                  </th>

                  <th style={th}>
                    Holdings
                  </th>

                  <th style={th}>
                    Current Price
                  </th>

                  <th style={th}>
                    Total Value
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={td}>
                    Bitcoin
                  </td>

                  <td style={td}>
                    {wallet?.BTC?.toFixed(
                      6
                    )}{" "}
                    BTC
                  </td>

                  <td style={td}>
                    ${btcPrice}
                  </td>

                  <td style={td}>
                    $
                    {btcValue.toFixed(
                      2
                    )}
                  </td>
                </tr>

                <tr>
                  <td style={td}>
                    USDT
                  </td>

                  <td style={td}>
                    $
                    {wallet?.USDT?.toFixed(
                      2
                    )}
                  </td>

                  <td style={td}>
                    $1
                  </td>

                  <td style={td}>
                    $
                    {wallet?.USDT?.toFixed(
                      2
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

const card = {
  background: "#111827",
  padding: "30px",
  borderRadius: "20px",
};

const th = {
  textAlign: "left",
  padding: "15px",
  borderBottom:
    "1px solid #334155",
};

const td = {
  padding: "15px",
  borderBottom:
    "1px solid #1e293b",
};

export default Portfolio;