import React from "react";
import "./restourant-card.css";
import {searchValue} from "../search/Search"


export function RestourantCard(props) {
  return (
    <div className="restaurantCard">
      <a href="/restourant">
        <img
          className="restaurantCard__img"
          src={props.imageUrl}
          alt="restourant_photo"
        />
      </a>
      <span className="restaurantCard__title">{props.title}</span>
      <p className="restaurantCard__category">
        {props.priceBucket}
        {props.categories.map(category => {
          return " • " + category.keyName;
        })}
      </p>
      <p className="restaurant-card__time">
        {props.etaRange.min} - {props.etaRange.max} Min
      </p>
    </div>
  );
}
