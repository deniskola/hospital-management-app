import React from "react";
import welcomeImage from "../../assets/welcome-img.png";
import backgroundImage from "../../assets/background-img.jpg";
import * as s from "./Login.styles";

const Login = () => {
  return (
    <s.LoginContainer>
      <img class="background-img" src={backgroundImage} alt=""></img>
      <div class="transparent-background"></div>
      <div class="content">
        <div class="welcome-box">
          <div class="welcome-text">
            <h1>Welcome</h1>
            <h3>to our Hospital</h3>
            <h6>web app</h6>
          </div>
          <img src={welcomeImage} alt=""></img>
        </div>
        <div class="login-form">
          <div class="logo"></div>
          <div class="login-header">
            <h3>Login</h3>
            <p>Login to your account</p>
            <hr
              style={{ width: "80%", borderColor: "black", borderTop: "none" }}
            ></hr>
          </div>
          <form action="">
            <p>
              <b>Username*</b>
            </p>
            <input type="username" placeholder="username"></input>
            <p>
              <b>Password*</b>
            </p>
            <input type="password" placeholder="password"></input>
            <div class="menu-crf">
              <input
                class="checkbox"
                type="checkbox"
                style={{ width: "12px", height: "12px", marginRight: "5px" }}
              ></input>
              <p>remember me</p>
              <p style={{ marginLeft: "40px" }}> forgot password?</p>
            </div>
            <button
              style={{
                marginTop: "25px",
                backgroundColor: "#A071FF",
                color: "white",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </s.LoginContainer>
  );
};

export default Login;
