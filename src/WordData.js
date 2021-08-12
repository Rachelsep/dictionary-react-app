import React from "react";
import Meaning from "./Meaning";
import "./WordData.css";
import "./Phonetics.css";
import Phonetics from "./Phonetics";

export default function WordData(props) {
  if (props.data) {
    return (
      <div className="word-data">
        <section>
          <h1 className="word">{props.data.word}</h1>
          {props.data.phonetics.map(function (phonetics, index) {
            return (
              <div key="index">
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>

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
