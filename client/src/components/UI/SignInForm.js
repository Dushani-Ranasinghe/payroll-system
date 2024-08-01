import React, { useState } from "react";
import "../../styles/SignInForm.css";
import axios from "axios";

const SignInForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin")
      .then((result) => console.log(result))
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default SignInForm;
