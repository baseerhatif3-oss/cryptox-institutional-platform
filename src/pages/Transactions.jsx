import React, {
  useEffect,
  useState,
} from "react";

import API from "../api";

function Transactions() {
  const [
    transactions,
    setTransactions,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions =
    async () => {
      try {
        const { data } =
          await API.get(
            "/trade/transactions"
          );

        setTransactions(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

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
        Transaction History
      </h1>

      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "20px",
          overflowX: "auto",
        }}
      >
        {loading ? (
          <h2>Loading...</h2>
        ) : transactions.length ===
          0 ? (
          <h2>
            No transactions found
          </h2>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse:
                "collapse",
            }}
          >
            <thead>
              <tr>
                <th style={th}>
                  Type
                </th>

                <th style={th}>
                  Asset
                </th>

                <th style={th}>
                  Amount
                </th>

                <th style={th}>
                  Price
                </th>

                <th style={th}>
                  Total
                </th>

                <th style={th}>
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(
                (tx) => (
                  <tr key={tx._id}>
                    <td
                      style={{
                        ...td,
                        color:
                          tx.type ===
                          "BUY"
                            ? "#22c55e"
                            : "#ef4444",
                        fontWeight:
                          "bold",
                      }}
                    >
                      {tx.type}
                    </td>

                    <td style={td}>
                      {tx.asset}
                    </td>

                    <td style={td}>
                      {tx.amount}
                    </td>

                    <td style={td}>
                      $
                      {tx.price}
                    </td>

                    <td style={td}>
                      $
                      {tx.total}
                    </td>

                    <td style={td}>
                      {new Date(
                        tx.date
                      ).toLocaleString()}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

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

export default Transactions;