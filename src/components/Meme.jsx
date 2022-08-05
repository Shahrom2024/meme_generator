import { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = useState("");
  const [meme, setMeme] = useState("");

  function getMemeImage() {
    // Dot notation
    // const memesArray = memesData.data.memes;

    // Destructurization
    const {
      data: { memes },
    } = memesData;

    const randomNumber = Math.floor(Math.random() * memes?.length);
    setMemeImage(memes[randomNumber]?.url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top text" />
        <input type="text" className="form--input" placeholder="Bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}

export default Meme;
