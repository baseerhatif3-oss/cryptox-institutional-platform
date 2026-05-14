import { useState } from "react";
import axios from "axios";

function Login() {
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

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      const response =
        await axios.post(
          "https://crypto-platform-backend-d2az.onrender.com/api/auth/login",
          formData
        );

      localStorage.setItem(
        "userInfo",
        JSON.stringify(
          response.data
        )
      );

      alert(
        "Login Successful"
      );

      window.location.replace(
        "/dashboard"
      );
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020b24",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={
          handleSubmit
        }
        style={{
          background: "#111c3d",
          padding: "40px",
          borderRadius: "10px",
          width: "350px",
          display: "flex",
          flexDirection:
            "column",
          gap: "15px",
        }}
      >
        <h1
          style={{
            color: "#d4a017",
            textAlign:
              "center",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={
            handleChange
          }
          style={{
            padding: "12px",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={
            handleChange
          }
          style={{
            padding: "12px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            background:
              "#d4a017",
            border: "none",
            cursor: "pointer",
            fontWeight:
              "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;