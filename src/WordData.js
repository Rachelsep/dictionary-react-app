import React from "react";
import Meaning from "./Meaning";
import "./WordData.css";

export default function WordData(props) {
  if (props.data) {
    return (
      <div className="word-data">
        <h1 className="word">{props.data.word}</h1>
        <h2 className="phonetics">{props.data.phonetics[0].text}</h2>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
