import { useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import API from "../api";

function Login() {
  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const submitHandler = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } =
        await API.post(
          "/auth/login",
          formData
        );

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      navigate("/dashboard");
    } catch (error) {
      alert(
        error?.response?.data
          ?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={box}>
        <h1 style={title}>
          Crypto Login
        </h1>

        <form
          onSubmit={
            submitHandler
          }
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={
              handleChange
            }
            style={input}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={
              handleChange
            }
            style={input}
            required
          />

          <button style={button}>
            {loading
              ? "Loading..."
              : "Login"}
          </button>
        </form>

        <p style={text}>
          New user?{" "}
          <Link to="/">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#0f172a",
};

const box = {
  background: "#1e293b",
  padding: "40px",
  borderRadius: "20px",
  width: "350px",
  boxShadow:
    "0 0 20px rgba(0,0,0,0.3)",
};

const title = {
  color: "#facc15",
  marginBottom: "30px",
  textAlign: "center",
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "none",
  background: "#334155",
  color: "white",
  boxSizing: "border-box",
};

const button = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  background: "#facc15",
  fontWeight: "bold",
  cursor: "pointer",
};

const text = {
  color: "white",
  marginTop: "20px",
  textAlign: "center",
};

export default Login;