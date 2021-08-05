import React from "react";
import "./WordData.css";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      <a href={props.phonetics.audio}>Audio</a>
      <p>{props.phonetics.text}</p>
    </div>
  );
}
