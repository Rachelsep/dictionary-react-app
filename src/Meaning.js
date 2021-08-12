import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="definition">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition mt-3">{definition.definition}</div>
              <div className="example mt-3">{definition.example}</div>
              <div className="similar mt-3">Similar:</div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
