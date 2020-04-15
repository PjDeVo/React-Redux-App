import React from "react";
import { connect } from "react-redux";

import { getGames } from "../actions/index";
function Games(props) {
  console.log(props);
  return (
    <div>
      {props.games.length >= 1 ? (
        <div className="games-row">
          {" "}
          {props.games.map((game) => {
            return (
              <div className="game">
                <h1 className="game-name"> {game.name}</h1>
                <img className="game-image" src={game.url} />
                <a
                  className="game-link"
                  href={`https://twitch.tv/${game.name}`}
                >
                  {" "}
                  {game.name} On Twitch!{" "}
                </a>
                <h3>Rank {game.rank}</h3>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h1> Want To See Twitch's Top Games? Click On the Button!</h1>
          {/* <button
            style={{
              padding: "50px",
              borderRadius: "3%",
              backgroundColor: "black",
              color: "purple",
            }}
            onClick={() => [props.getGames()]}
          >
            Click Here!
          </button> */}

          <img
            className="main-image"
            onClick={() => [props.getGames()]}
            src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png"
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: state.gamesLibrary,
  };
};

export default connect(mapStateToProps, { getGames })(Games);
