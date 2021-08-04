import React from "react";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      <p>Text: {props.phonetics.text}</p>
      <a href={props.phonetics.audio}>Audio</a>
    </div>
  );
}
