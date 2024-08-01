import React from "react";
import "../../styles/SignInForm.css"

const SignInForm = () => {
  return (
    <form className="sign-in-form">
      <div className="form-content">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter Email" required />
      </div>
      <div className="form-content">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter Password" required/>
      </div>
      <button type="submit" >Log In</button>
    </form>
  );
};

export default SignInForm;
