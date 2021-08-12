import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import WordData from "./WordData.js";
import Photos from "./Photos.js";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [wordData, setWordData] = useState(null);
  let [photos, setPhotos] = useState(null);

  function wordSearch(response) {
    setWordData(response.data[0]);
  }

  function handleSubmit(event) {
    setKeyword(event.target.value);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(wordSearch);

    let pexelsApiKey =
      "563492ad6f91700001000001109b38bd694444518139b64f53ce7570";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
          <div className="hint mt-2">
            <em>i.e. dog, sailboat, dance</em>
          </div>
        </form>
      </section>
      <WordData data={wordData} />
      <Photos photos={photos} />
    </div>
  );
}
