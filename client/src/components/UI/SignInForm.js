import React, { useState } from "react";
import "../../styles/SignInForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <div className="form-content">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          required
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </div>
      <div className="form-content">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          required
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
      </div>
      <div className="error-msg-container">
       <p className="error-msg"> * {error && error}</p>
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default SignInForm;
