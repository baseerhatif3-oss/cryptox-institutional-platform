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

      window.location.href =
        "/dashboard";
    } catch (error) {
      alert(
        error.response?.data
          ?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form
        onSubmit={
          handleSubmit
        }
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={
            handleChange
          }
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={
            handleChange
          }
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;