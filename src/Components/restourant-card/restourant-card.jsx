import React from "react";
import "./restourant-card.css";
import {searchValue} from "../search/Search"
import {Link} from "react-router-dom";


export function RestourantCard(props) {
    return (
        <div className="restaurantCard">
            <Link to="/restourant">
                <img
                    className="restaurantCard__img"
                    src={props.imageUrl}
                    alt="restourant_photo"
                />
            </Link>
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
