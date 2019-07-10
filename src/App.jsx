import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/header/Header.jsx";
import { Main } from "./Components/main/Main.jsx";
import {RestourantPage} from "./Components/RestourantPage/RestourantPage"


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
                component={RestourantPage}
            />

        </Router>

    </div>
  );
}

export default App;
