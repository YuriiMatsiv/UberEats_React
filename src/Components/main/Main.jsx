import React from "react";
import "./Main.css";
import { Search } from "../search/Search";
import { restaurants } from "./../info";
import { RestourantCard } from "./../restourant-card/restourant-card";
import {Container} from "../Container/Container";

export function Main() {
  return (
      <Container>
   <div className="main">
      <Search />
      <span className="main__span">Kyiv Restaurants</span>
      <div className="restourntsWrapper">
        {restaurants.map((restaurant, i) => {
          return (
            <RestourantCard
              key={i}
              title={restaurant.title}
              categories={restaurant.categories}
              priceBucket={restaurant.priceBucket}
              imageUrl={restaurant.imageUrl}
              etaRange={restaurant.etaRange}
            />
          );
        })}
      </div>
    </div>
      </Container>
  );
}
