import React from "react";
import { Button } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import img from "../assest/The-ultimate-guide-to-Placement-Management-system.jpg";
// import App from "../App.css";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="home-title">CVM Placement Management</div>
      <div className="img-container">
        <img src={img} alt="Home img" />
      </div>

      <div className="button-container">
        <button className="button">
          <Link
            className="link
          "
            to="/adminlogin"
          >
            Admin
          </Link>
        </button>
        <button className="button">
          <Link className="link" to="/login">
            Student
          </Link>
        </button>
      </div>
    </div>
  );
};
