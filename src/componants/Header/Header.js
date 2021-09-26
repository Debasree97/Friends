import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h4>One of the Top 50 Greatest TV Shows of All Time!</h4>
      <h5>
        Yearly Generated Revenue:{" "}
        <span style={{ color: "#e91e23", fontStyle: "italic" }}>
          {" "}
          $1.4 Billion
        </span>
      </h5>
    </div>
  );
};

export default Header;
