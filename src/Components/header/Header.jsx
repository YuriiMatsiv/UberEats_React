import React from "react";
import "./Header.css";
import { UberLogo } from "../uber-logo/uber-logo";
import { DeliveryPlace, deliveryPlase } from "../delivery-place/delivery-place";
import { ButtonRegister } from "../button-register/button-register";
import { ButtonSingIn } from "../button-singIn/button-singIn";

import basket from "./image/basket.svg";

export function Header() {
  return (
    <div className="Header">
      <header>
        <div className="header-container">
          <UberLogo />
          <DeliveryPlace />

          <div className="button__wrapper">
            <ButtonSingIn />
            <ButtonRegister />
            <a href="https://www.ubereats.com/ru-UA/checkout/">
              <img src={basket} alt="basket" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
