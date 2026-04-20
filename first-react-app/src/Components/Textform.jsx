import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === 'light' ? 'black' : 'white', textAlign: 'center' }}>
          {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="FormControlTextarea1"
            rows={8}
            value={text}
            onChange={(event) => setText(event.target.value)}
            style={{
              backgroundColor: props.mode === 'dark' ? '#0b2c4f' : 'white',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
          />
        </div>
        <button
          className="btn btn-outline-success mx-2 my-2"
          onClick={() => handleUPclick(text, setText)}
        >
          Convert To UpperCase
        </button>
        <button
          className="btn btn-outline-success mx-2 my-2"
          onClick={() => handleLOclick(text, setText)}
        >
          Convert To LowerCase
        </button>
        <button
          className="btn btn-outline-success mx-2 my-2"
          onClick={() => setText("")}
        >
          Clear Text
        </button>
        <button
          className="btn btn-outline-success mx-2 my-2"
          onClick={() => setText(text.split("").reverse().join(""))}
        >
          Reverse Text
        </button>
        <button
          className="btn btn-outline-success mx-2 my-2"
          onClick={() => speak(text)}
        >
          Speak
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something To Preview It Here"}</p>
      </div>
    </>
  );
}
// by Default in the onChange event passed the event parameter
// function handleonChange(event, setText2) {
//   setText2(event.target.value);
// }
function handleUPclick(text1, setText1) {
  console.log("UpperCase Was Clicked");
  let newText = text1.toUpperCase();
  setText1(newText);
}

function handleLOclick(text2, setText2) {
  console.log("LowerCase Was Clicked");
  let newText = text2.toLowerCase();
  setText2(newText);
}
function speak(text) {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
