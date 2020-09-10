import React from "react";
import "./App.css";
import Joke from "./components/Joke";

function App() {
  return (
    <div>
      <Joke question="Question 1" punchLine="Punchiline 1" />
      <Joke question="Question 2" punchLine="Punchiline 2" />
      <Joke question="Question 3" punchLine="Punchiline 3" />
      <Joke punchLine="Punchiline 4" />
      <Joke question="Question 5" punchLine="Punchiline 5" />
    </div>
  );
}

export default App;
