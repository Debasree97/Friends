import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h2>
        One of the Top 50 Greatest TV Shows of All Time!
      </h2>
      <h3>
        Yearly Generated Revenue:{" "}
        <span style={{ color: "#e91e23" }}> $1.4 Billion</span>
      </h3>
    </div>
  );
};

export default Header;
