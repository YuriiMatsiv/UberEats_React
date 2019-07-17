import React from "react";
import "./uber-logo.css";
import logo from "./logo.svg";
import {Link} from "react-router-dom";

export function UberLogo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="uber-logo" />
    </Link>
  );
}
