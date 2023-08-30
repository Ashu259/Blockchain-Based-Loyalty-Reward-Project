import React, { useContext, useState } from "react";
import "./Signin.css";
import { authenticateLogin } from "../services/api.js";
import { DataContext } from "../context/Dataprovider";
import { useNavigate } from "react-router-dom";

const loginInitialValue = {
  username: "",
  password: "",
};

const Signin = () => {
  const [Error, setError] = useState(false);

  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const [login, setLogin] = useState(loginInitialValue);

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    console.log(response.data.data?.username);
    if (response.status === 200) {
      setAccount(response.data.data?.username);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div class="mains">
      <div class="lefts">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="786.704"
          height="1380.816"
          viewBox="0 0 786.704 1380.816"
        >
          <path
            id="Path_5"
            data-name="Path 5"
            d="M1978,2572s27.421,376.667,177.4,444.627c97.638,44.242,273.736,61.669,419,224.874,77.922,87.548,146.958,216.968,190.305,414.892-465.223,666.951-786.7,0-786.7,0Z"
            transform="translate(-1978 -2572)"
            fill="#2874f0"
          />
        </svg>

        {/* <img src="/images/login.png" alt="" id="loginimg" /> */}
      </div>
      <div class="rights">
        <div class="text3">
          <h1>sign in</h1>
          {/* <form method="post" action="/login" > */}
          <div class="bara">
            <div class="box">
              <i class="ri-mail-fill"></i>
            </div>
            <input
              onChange={(e) => changeHandler(e)}
              autocomplete="off"
              required
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div class="bara">
            <div class="box">
              <i class="ri-lock-fill"></i>
            </div>
            <input
              onChange={(e) => changeHandler(e)}
              autocomplete="off"
              required
              type="text"
              name="password"
              placeholder="Password"
            />
          </div>
          <div class="links">
            <p> Forgot Your Password ?</p>
            <p onClick={() => navigate("/login")}> Create account</p>
          </div>
          {Error && (
            <p className="errorlogin">
              please enter valid username and password
            </p>
          )}
          <button onClick={() => loginUser()} type="submit" class="btn">
            Login
          </button>
          <div id="line">
            <hr />
            <p>or login with</p>
            <hr />
          </div>
          <div class="reg">
            <div class="google">
              <i class="ri-google-fill"></i>
            </div>
            <div class="google">
              <i class="ri-facebook-fill"></i>
            </div>
            <div class="google">
              <i class="ri-linkedin-fill"></i>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;