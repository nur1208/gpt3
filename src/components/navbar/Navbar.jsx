import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-link">
        <div className="gpt3__navbar-links_log">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};
