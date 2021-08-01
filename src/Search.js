import React from "react";
import "./Homepage.css";
import "./Search.css";

export default function Search() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function search(event) {
    event.preventDefault();
    console.log("hello");
  }

  return (
    <div className="searchbar">
      <form onClick={search} className="form">
        <input
          className="input-field"
          type="search"
          placeholder="     Search for a word"
          onChange={handleSubmit}
        ></input>
        <button className="button">Search</button>
      </form>
    </div>
  );
}
