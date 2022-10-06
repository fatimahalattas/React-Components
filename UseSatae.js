import './App.css';
import React, {useState } from "react";



function App(props) {
  // Array deconstruction
  const [emotion, setEmotion] = useState("happy");
return(
  <>
  <h1>Current emotion is {emotion}.</h1>
  <button onClick = {() => setEmotion("happy")}>
    Happy
  </button>
  <button onClick = {() => setEmotion("frustrated")}>
    Frustrate
  </button>
  <button onClick = {() => setEmotion("Sleepy")}>
    Sleep
  </button>
  </>
);

 
}

export default App;
