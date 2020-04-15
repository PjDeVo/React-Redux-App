import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import Games from "./Components/gamesList";

function App() {
  // const [games, setGames] = useState([]);
  useEffect(() => {});

  return (
    <div className="App">
      <h1>Twitch Top Games</h1>
      <Games />
    </div>
  );
}

export default App;
