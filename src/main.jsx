import React from "react";
import ReactDOM from "react-dom/client";

function Test() {

  return (

    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "48px",
        fontWeight: "bold",
      }}
    >

      WEBSITE WORKING 🚀

    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <Test />
);