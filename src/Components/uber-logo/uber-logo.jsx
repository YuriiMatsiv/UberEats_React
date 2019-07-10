import React from "react";
import "./uber-logo.css";
import logo from "./logo.svg";

export function UberLogo() {
  return (
    <a href="/">
      <img src={logo} alt="logo" className="uber-logo" />
    </a>
  );
}
