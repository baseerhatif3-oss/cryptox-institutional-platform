import { useState } from "react";

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
        await fetch(
          "https://crypto-platform-backend.onrender.com/api/auth/register",
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

      console.log(data);

      if (!response.ok) {
        alert(
          data.message ||
            "Register Failed"
        );

        setLoading(false);

        return;
      }

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      window.location.href =
        "/dashboard";
    } catch (error) {
      console.log(error);

      alert(error.message);
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