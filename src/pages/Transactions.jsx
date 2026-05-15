import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

function Transactions() {
  const user = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const [
    transactions,
    setTransactions,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  /* FETCH */

  const fetchTransactions =
    async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } =
          await axios.get(
            "https://crypto-platform-backend-d2az.onrender.com/api/trade/transactions",
            config
          );

        setTransactions(data.reverse());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
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
          Transaction History
        </h1>

        <p>
          Complete trading activity
        </p>

        {/* CONTENT */}

        <div
          style={{
            marginTop: "30px",
          }}
        >
          {loading ? (
            <h2>
              Loading...
            </h2>
          ) : transactions.length ===
            0 ? (
            <div style={emptyCard}>
              No transactions found
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gap: "20px",
              }}
            >
              {transactions.map(
                (
                  tx,
                  index
                ) => (
                  <div
                    key={index}
                    style={{
                      background:
                        "linear-gradient(135deg,#0f172a,#1e293b)",
                      padding:
                        "25px",
                      borderRadius:
                        "20px",
                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.3)",
                      border:
                        tx.type ===
                        "BUY"
                          ? "1px solid #22c55e"
                          : "1px solid #ef4444",
                    }}
                  >
                    {/* TOP */}

                    <div
                      style={{
                        display:
                          "flex",
                        justifyContent:
                          "space-between",
                        alignItems:
                          "center",
                        flexWrap:
                          "wrap",
                        gap: "10px",
                      }}
                    >
                      <h2
                        style={{
                          color:
                            tx.type ===
                            "BUY"
                              ? "#22c55e"
                              : "#ef4444",
                        }}
                      >
                        {tx.type}
                      </h2>

                      <p>
                        {new Date(
                          tx.date
                        ).toLocaleString()}
                      </p>
                    </div>

                    {/* DETAILS */}

                    <div
                      style={{
                        display:
                          "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit,minmax(180px,1fr))",
                        gap: "20px",
                        marginTop:
                          "20px",
                      }}
                    >
                      <div>
                        <p
                          style={
                            label
                          }
                        >
                          Asset
                        </p>

                        <h3>
                          {
                            tx.asset
                          }
                        </h3>
                      </div>

                      <div>
                        <p
                          style={
                            label
                          }
                        >
                          Amount
                        </p>

                        <h3>
                          {
                            tx.amount
                          }
                        </h3>
                      </div>

                      <div>
                        <p
                          style={
                            label
                          }
                        >
                          Price
                        </p>

                        <h3>
                          $
                          {
                            tx.price
                          }
                        </h3>
                      </div>

                      <div>
                        <p
                          style={
                            label
                          }
                        >
                          Total
                        </p>

                        <h3>
                          $
                          {
                            tx.total
                          }
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* STYLES */

const label = {
  color: "#94a3b8",
  marginBottom: "8px",
};

const emptyCard = {
  background:
    "linear-gradient(135deg,#0f172a,#1e293b)",
  padding: "40px",
  borderRadius: "20px",
  textAlign: "center",
};

export default Transactions;