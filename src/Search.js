import React, { useState } from "react";
import axios from "axios";
import "./Homepage.css";
import "./Search.css";
import WordData from "./WordData.js";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [wordData, setWordData] = useState(null);

  function wordSearch(response) {
    console.log(response);
    console.log("howdy");
    setWordData({
      word: response.data.word,
      text: response.data.phonetics.text,
      verb: response.data.meanings[0].definitions.definition,
      verbsynonym: response.data.meanings[0].definitions.definition.synonyms,
      noun: response.data.meanings[1].definitions.definition,
      nounsynonym: response.data.meanings[1].definitions.synonyms,
    });
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
      <WordData data={wordData} />
    </div>
  );
}
