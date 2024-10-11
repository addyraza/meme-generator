// src/App.js
import React from "react";
import MemeGenerator from "./MemeGenerator";
import "./App.css"; // Optional if you want to style here

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Meme Generator</h2>
        <MemeGenerator />
      </header>
    </div>
  );
}

export default App;
