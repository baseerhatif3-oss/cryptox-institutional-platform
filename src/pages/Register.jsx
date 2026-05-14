import { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

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

    setLoading(true);

    try {
      const response =
        await axios.post(
          "https://crypto-platform-backend.onrender.com/api/auth/register",
          formData
        );

      localStorage.setItem(
        "userInfo",
        JSON.stringify(response.data)
      );

      window.location.href =
        "/dashboard";
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data
          ?.message ||
          "Register Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div style={container}>
      <div style={box}>
        <h1 style={title}>
          Create Account
        </h1>

        <form
          onSubmit={
            submitHandler
          }
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={
              handleChange
            }
            style={input}
            required
          />

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
              : "Register"}
          </button>
        </form>

        <p
          style={{
            color: "white",
            marginTop: "20px",
          }}
        >
          Already have account?{" "}
          <Link to="/login">
            Login
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
  background: "#020617",
};

const box = {
  background: "#1e293b",
  padding: "40px",
  borderRadius: "20px",
  width: "350px",
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

export default Register;