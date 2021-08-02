import React from "react";
import "./Homepage.css";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
  }

  return (
    <div className="searchbar">
      <form onClick={search} className="form">
        <input
          className="input-field"
          type="search"
          placeholder="     Search for a word"
          onChange={handleSubmit}
          autoFocus="on"
        ></input>
        <button className="button">Search</button>
      </form>
    </div>
  );
}
