import React from "react";
import "./App.css";
import Joke from "./components/Joke";
import jokesData from "./jokesData.js";

function App() {
  const jokesComponents = jokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return <div>{jokesComponents}</div>;
}

export default App;
