import React from "react";
import reactLogo from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav>
      <img src={reactLogo} alt="React Logo" className="nav--icon" />
      <h3 className="nav--logo_text">Facts about me</h3>
      <h4 className="nav--title">React Project 1</h4>
    </nav>
  );
}
