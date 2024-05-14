import React from "react";
import leftImg from "../assets/images/left.png";
import one from "../assets/images/lg1.png";
import two from "../assets/images/lg2.png";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";
import facebook from "../assets/images/facebooke.png";

import "../index.css";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <img src={leftImg} alt="" />
      </div>
      <div className="right">
        <div className="logo">
          <img src={one} alt="" className="one"/>
          <img src={two} alt="" className="two"/>
        </div>
        <div className="heading">
          <p>Create Account</p>
        </div>
        <form className="form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your Full Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your Password"/>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="others">
            <p>- OR -</p>
        </div>
        <div className="options">
            <div className="google">
                <img src={google} alt="" />
                <img src={facebook} alt="" />
                <img src={apple} alt="" />
            </div>
        </div>
        <div className="last">
        <div className="already">Already have an account?</div>
        <p className="login">Login</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
