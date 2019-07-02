import React from "react";
import "./delivery-place.css";

export function DeliveryPlace() {
  return (
    <div className="delivery-place">
      <button className="delivery-place__time">ASAP</button>
      <span className="delivery-place__span">to</span>
      <label className="delivery-place__adress">
        <input
          type="text"
          className="delivery-place__input"
          placeholder="ul. Tarasivska St, 16"
        ></input>
      </label>
    </div>
  );
}
