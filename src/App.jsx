import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/header/Header.jsx";
import { Main } from "./Components/main/Main.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/**/}
      {/*<Router>*/}
      {/*     <Route path='/'*/}
      {/*            exact*/}
      {/*            component={main}/>*/}
      {/*     <Route path='/restaurant'*/}
      {/*            component={RestaurantPage}/>*/}
      {/* </Router>*/}
    </div>
  );
}

export default App;
