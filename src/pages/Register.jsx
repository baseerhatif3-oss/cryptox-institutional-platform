import { useState } from "react";

function Register() {
  const [formData, setFormData] =
    useState({
      name: "",
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
        await fetch(
          "https://crypto-platform-backend-d2az.onrender.com/api/auth/register",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              formData
            ),
          }
        );

      const data =
        await response.json();

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      alert(
        "Registration Successful"
      );

      window.location.replace(
        "/dashboard"
      );
    } catch (error) {
      alert(
        "Register Failed"
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
          Create Account
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={
            handleChange
          }
          style={{
            padding: "12px",
          }}
        />

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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;