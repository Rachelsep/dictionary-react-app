import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import WordData from "./WordData.js";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [wordData, setWordData] = useState(null);

  function wordSearch(response) {
    setWordData(response.data[0]);
  }

  function handleSubmit(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(wordSearch);
  }

  return (
    <div className="searchbar mt-5">
      <section>
        <h1 className="intro">What word do you want to look up?</h1>
        <form onSubmit={search} className="form">
          <input
            className="form-control form-control-lg input"
            type="search"
            placeholder="Search for a word"
            onChange={handleSubmit}
          ></input>
          <div className="hint mt-3">
            <em>i.e. dog, sailboat, dance</em>
          </div>
        </form>
      </section>
      <WordData data={wordData} />
    </div>
  );
}
