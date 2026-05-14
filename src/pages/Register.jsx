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

      window.location.href =
        "/dashboard";
    } catch (error) {
      alert(
        "Register Failed"
      );
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form
        onSubmit={
          handleSubmit
        }
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={
            handleChange
          }
        />

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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;