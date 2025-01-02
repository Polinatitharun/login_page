import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">

      <div className="left-section">
        <h1 className="logo">Tharun</h1>
        <img
          src="https://th.bing.com/th/id/OIP.vGv9zvlruJxqQ-bG1m8MbAHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Desert background"
          className="background-image"
        />
      </div>
      <div className="right-section">
        <h6>Create an account</h6>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
        <form className="form">
          <div className="input-group">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Enter your password" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <span >Terms & Conditions</span>
            </label>
          </div>
          <button className="create-account-button">Create account</button>
        </form>
        <p className="or">Or register with</p>
        <div className="social-buttons">
          <button className="google">Google</button>
          <button className="apple">Apple</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
