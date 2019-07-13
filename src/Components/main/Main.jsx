import React from "react";
import "./Main.css";
import {Search, searchValue} from "../search/Search";
import { restaurants } from "./../info";
import { RestourantCard } from "./../restourant-card/restourant-card";
import { Container } from "../Container/Container";




export class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchValue:''
        }
    }
    render(){
        return <Container>
            <div className="main">
                <Search/>

                <span className="main__span">Kyiv Restaurants</span>

                <div className="restourntsWrapper">

                    {restaurants
                        .filter((restaurant) => restaurant.title.includes(window.searchValue))
                        .map((restaurant, i) => {
                            let restourantCard = <><RestourantCard
                                key={i}
                                title={restaurant.title}
                                categories={restaurant.categories}
                                priceBucket={restaurant.priceBucket}
                                imageUrl={restaurant.imageUrl}
                                etaRange={restaurant.etaRange}
                            /></>;
                            return restourantCard;
                        })}

                </div>
            </div>
        </Container>;
    }

}
