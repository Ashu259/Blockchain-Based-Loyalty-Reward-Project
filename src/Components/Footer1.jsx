import React from "react";
import logo from "../Images/logo.png";

const Footer1 = () => {
  return (
    <div class="footer">
      <div class="footercon">
        {/* <h1>Foodaholic</h1> */}
        <img id="logofooter" src={logo} alt="" />
        <div class="alllinks">
          <div class="quicklink">
            <h3>Quicklinks</h3>
            <div class="links1">
              <a href="">home</a>
              <a href="">about</a>
              <a href="">Blogs</a>
              <a href="">Login</a>
              <a href="">contact</a>
            </div>
          </div>
          <div class="quicklink">
            <h3>Learn More</h3>
            <div class="links1">
              <a href="">Privacy</a>
              <a href="">Security</a>
              <a href="">terms</a>
              <a href="">sitemap</a>
            </div>
          </div>
          <div class="quicklink">
            <h3>For Sellers</h3>
            <div class="links1">
              <a href="">Partner with us</a>
              <a href="">apps for you</a>
              <a href="">Something New</a>
              <a href="">contact</a>
            </div>
          </div>
          <div class="sociallinks">
            <h3>Social Links</h3>
            <div class="allsocial">
              <div class="onesocial">
                <i class="ri-facebook-fill"></i>
              </div>
              <div class="onesocial">
                <i class="ri-instagram-fill"></i>
              </div>
              <div class="onesocial">
                <i class="ri-twitter-fill"></i>
              </div>
              <div class="onesocial">
                <i class="ri-youtube-fill"></i>
              </div>
            </div>
            <div class="playstore">
              <img
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt=""
              />
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
