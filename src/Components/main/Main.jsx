import React from "react";
import "./Main.css";
import {Search, searchValue} from "../search/Search";
import {restaurants} from "./../info";
import {RestourantCard} from "./../restourant-card/restourant-card";
import {Container} from "../Container/Container";


export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }


updateSearchValue = (searchValue) => {
    this.setState({
        searchValue: searchValue
    });
}

    render() {
        return <Container>
            <div className="main">
                <Search onSearchChange={this.updateSearchValue}/>

                <span className="main__span">Kyiv Restaurants</span>

                <div className="restourntsWrapper">

                    {restaurants
                        .filter((restaurant) => restaurant.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
                        .map((restaurant, i) => {
                            return (<RestourantCard
                                key={i}
                                title={restaurant.title}
                                categories={restaurant.categories}
                                priceBucket={restaurant.priceBucket}
                                imageUrl={restaurant.imageUrl}
                                etaRange={restaurant.etaRange}
                                searchValue={this.state.searchValue}
                            />);
                        })}

                </div>
            </div>
        </Container>;
    }

}
