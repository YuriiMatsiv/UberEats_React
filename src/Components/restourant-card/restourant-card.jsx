import React from "react";
import "./restourant-card.css";

export function RestourantCard(props) {
    return (

        <div className="restaurantCard">
            <img className="restaurantCard__img" src={props.imageUrl} alt="restourant_photo"/>
            <span className="restaurantCard__title">{props.title}</span>
            <span className="restaurantCard__category">{props.priceBucket}</span>
            <span className="restaurant-card__time"></span>
        </div>
    );
}
