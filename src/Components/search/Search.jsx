import React from "react";
import "./Search.css";

window.searchValue = '';

function onInputHandler(event) {
    window.searchValue = event.target.value;
}

export function Search() {
  return (
    <div className="search">
      <label className="search__label">
        <input
          type="text"
          className="search__input"
          onInput={onInputHandler}
          placeholder="Search for restaurant or cuisine"
        />
      </label>
    </div>
  );
}
