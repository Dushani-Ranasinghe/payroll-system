import React, { useState } from "react";
import "../styles/LandingPage.css";
import SignInForm from "../components/UI/SignInForm";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const handleSignInClick = () => {
    setShowForm(true);
  };
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="overlap">DPL BAGS</h1>
        <h1 className="overlap">DPL BAGS</h1>
        <h2>Salary Manager</h2>
        {!showForm ? (
          <button onClick={handleSignInClick}>Sign in</button>
        ) : (
          <SignInForm />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
