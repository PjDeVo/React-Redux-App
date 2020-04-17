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
      <div className="main-page-header">
        <h1>Twitch Top Games</h1>
        <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png" />
      </div>

      <Games />
    </div>
  );
}

export default App;
