import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="definition">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <br />
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <p>
                  <em>Definition: {definition.definition}</em>
                </p>
                <p>
                  <em>Sentence: {definition.example}</em>
                </p>
                <p>
                  <Synonyms synonyms={definition.synonyms} />
                </p>
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
