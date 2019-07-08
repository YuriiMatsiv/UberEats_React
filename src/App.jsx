import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/header/Header.jsx";
import { Main } from "./Components/main/Main.jsx";
import {RestourantCard} from "./Components/restourant-card/restourant-card"


function App() {
  return (
    <div className="App">
        <Header/>
         <Router>
                 <Route path="/"
                   exact
                   component={Main}/>
            <Route
                path="/restourant"
                component={RestourantCard}
            />

        </Router>

    </div>
  );
}

export default App;
