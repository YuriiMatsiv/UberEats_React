import React from "react";
import "./uber-logo.css";
import logo from "./logo.svg";

export function UberLogo() {
  return (
    <a href="https://www.ubereats.com/ru-UA/stores/">
      <img src={logo} alt="logo" className="uber-logo" />
    </a>
  );
}
