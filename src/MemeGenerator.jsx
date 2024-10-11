// src/MemeGenerator.js
import React, { useState } from "react";

const MemeGenerator = () => {
  const [meme, setMeme] = useState({
    url: "",
    title: "",
    author: "",
  });

  const updateMeme = (url, title, author) => {
    setMeme({ url, title, author });
  };

  const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
      .then((response) => response.json())
      .then((data) => {
        updateMeme(data.url, data.title, data.author);
      });
  };

  return (
    <div className="meme-generator">
      <button className="generate-meme" onClick={generateMeme}>
        Generate Meme
      </button>
      <h2 className="title">{meme.title || "Loading..."}</h2>
      <div style={{width:"100%"}}>{meme.url && <img src={meme.url} alt={meme.title} />}</div>
      <div className="author">{meme.author && `Meme by: ${meme.author}`}</div>
    </div>
  );
};

export default MemeGenerator;
