import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      <br />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <p>
                <em>{definition.definition}</em>
              </p>
              <p>
                <em>{definition.example}</em>
              </p>
            </p>
          </div>
        );
      })}
    </div>
  );
}
