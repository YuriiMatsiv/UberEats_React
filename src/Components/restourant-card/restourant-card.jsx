import React from "react";
import "./restourant-card.css";

export function RestourantCard(props) {
  return (
    <div className="restaurantCard">
      <img
        className="restaurantCard__img"
        src={props.imageUrl}
        alt="restourant_photo"
      />
      <span className="restaurantCard__title">{props.title}</span>
      <p className="restaurantCard__category">{props.priceBucket}</p>
      <p className="restaurant-card__time">20-30хв</p>


        <h1>якийсь ресторан</h1>
    </div>
  );
}
