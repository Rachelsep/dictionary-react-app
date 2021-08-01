import React from "react";
import Search from "./Search";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <h1 className="dictionary">Dictionary</h1>
      <Search />
    </div>
  );
}
