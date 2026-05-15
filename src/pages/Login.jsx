import {
  useState,
} from "react";

import axios from "axios";

function Register() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const submitHandler =
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);

        const { data } =
          await axios.post(
            "https://crypto-platform-backend-d2az.onrender.com/api/auth/register",
            {
              name,
              email,
              password,
            }
          );

        localStorage.setItem(
          "userInfo",
          JSON.stringify(data)
        );

        alert(
          "Registration Successful"
        );

        window.location.href =
          "/dashboard";
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Register Failed"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#020617,#0f172a)",
        minHeight: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background:
            "#0f172a",
          padding: "40px",
          borderRadius:
            "25px",
          width: "100%",
          maxWidth: "450px",
          color: "white",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            textAlign:
              "center",
            marginBottom:
              "10px",
          }}
        >
          CryptoX
        </h1>

        <p
          style={{
            textAlign:
              "center",
            color: "#94a3b8",
            marginBottom:
              "30px",
          }}
        >
          Create trading account
        </p>

        <form
          onSubmit={
            submitHandler
          }
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            style={input}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            style={input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            style={input}
          />

          <button
            type="submit"
            style={button}
          >
            {loading
              ? "Loading..."
              : "Register"}
          </button>
        </form>

        <p
          style={{
            textAlign:
              "center",
            marginTop:
              "20px",
          }}
        >
          Already have account?{" "}
          <span
            onClick={() => {
              window.location.href =
                "/login";
            }}
            style={{
              color:
                "#3b82f6",
              cursor:
                "pointer",
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

/* STYLES */

const input = {
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "none",
  background: "#1e293b",
  color: "white",
  fontSize: "16px",
};

const button = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "none",
  background: "#2563eb",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export default Register;