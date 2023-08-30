import React, { useState, useContext } from "react";
import "./Signup.css";
import { authenticateUser } from "../services/api";
import { DataContext } from "../context/Dataprovider";
import { useNavigate } from "react-router-dom";

const signUpInitialValues = {
  username: "",
  lastName: "",
  email: "",
  password: "",
  cityName: "",
};
const Signup = () => {
  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);
  const [signUp, setSignUp] = useState(signUpInitialValues);

  const changeHandler = (e) => {
    // console.log(e.target.value);
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    console.log(signUp);
  };

  const SignUser = async () => {
    let response = await authenticateUser(signUp);
    console.log(response);
    // if (!response) return;
    setAccount(signUp.username);
    navigate("/");
  };

  return (
    <div class="main">
      <div class="left">
        <h2 id="webname"> E - Commerce</h2>
        <div class="text">
          <h1>welcome back</h1>
          <p>
            To Keep Connected With Us Please Login with your professional info
          </p>
          <button onClick={() => navigate("/register")} class="btn">
            Sign In
          </button>
        </div>
        <img src="/images/signup.png" alt="" id="signup" />
      </div>
      <div class="right">
        <div class="text2">
          <h1>create account</h1>

          {/* <form method="post"> */}
          <div id="first" class="bara">
            <div class="sm">
              <div class="box">
                <i class="ri-user-fill"></i>
              </div>
              <input
                className="input"
                onChange={(e) => {
                  changeHandler(e);
                }}
                name="username"
                autocomplete="off"
                class="name"
                type="text"
                placeholder="First Name"
              />
            </div>

            <div id="lastname" class="sm">
              <div class="box">
                <i class="ri-user-fill"></i>
              </div>
              <input
                className="input"
                onChange={(e) => {
                  changeHandler(e);
                }}
                name="lastName"
                autocomplete="off"
                class="name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div class="bara">
            <div class="box">
              <i class="ri-mail-fill"></i>
            </div>
            <input
              className="input"
              onChange={(e) => {
                changeHandler(e);
              }}
              name="email"
              autocomplete="off"
              required
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="bara">
            <div class="box">
              <i class="ri-lock-fill"></i>
            </div>
            <input
              className="input"
              onChange={(e) => {
                changeHandler(e);
              }}
              name="password"
              autocomplete="off"
              required
              type="text"
              placeholder="Password"
            />
          </div>
          <div class="bara">
            <div class="box">
              <i class="ri-building-4-fill"></i>
            </div>
            <input
              className="input"
              onChange={(e) => {
                changeHandler(e);
              }}
              name="cityName"
              autocomplete="off"
              type="text"
              placeholder="City Name"
            />
          </div>

          <button onClick={() => SignUser()} class="btn">
            Sign Up
          </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
