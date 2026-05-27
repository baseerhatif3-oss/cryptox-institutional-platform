import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import {
  Toaster,
} from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )
).render(

  <React.StrictMode>

    <App />

    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#111",
          color: "#fff",
          border:
            "1px solid rgba(255,255,255,0.1)",
          borderRadius: "18px",
          padding: "18px",
          fontWeight: "700",
        },

        success: {
          iconTheme: {
            primary:
              "#22c55e",
            secondary:
              "#000",
          },
        },

        error: {
          iconTheme: {
            primary:
              "#ef4444",
            secondary:
              "#000",
          },
        },
      }}
    />

  </React.StrictMode>
);