import React from "react";
import "./Search.css";

export function Search() {
  return (
    <div className="search">
      <label className="search__label">
        <input
          type="text"
          className="search__input"
          placeholder="Search for restaurant or cuisine"
        />
      </label>
    </div>
  );
}
