import React from "react";
import { connect } from "react-redux";

import { getGames } from "../actions/index";
function Games(props) {
  return (
    <div>
      {props.games.length >= 1 ? (
        <div>
          {" "}
          {props.games.map((game) => {
            return (
              <div className="game">
                <h1> {game.name}</h1>
                <img src={game.box_art_url} />
                <a href={`https://twitch.tv/${game.name}`}>
                  {" "}
                  {game.name} On Twitch!{" "}
                </a>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          Want To See Twitch's Top Games?
          <button onClick={() => [props.getGames()]}> </button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("here is the state", state);
  return {
    games: state.gamesLibrary,
  };
};

export default connect(mapStateToProps, { getGames })(Games);
