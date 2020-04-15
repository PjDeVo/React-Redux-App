import axios from "axios";

export const GET_GAMES = "GET_GAMES";
export const SET_GAMES = "SET_GAMES";

export const getGames = () => (dispatch) => {
  dispatch({
    type: GET_GAMES,
  });
  axios
    .get("https://api.twitch.tv/helix/games/top", {
      headers: {
        "Client-ID": "yn1daj328z3vqlu5ori3vwk77pjpqn",
      },
    })
    .then((resp) => {
      const games = resp.data.data.map((game, index) => {
        return {
          name: game.name,
          url: game.box_art_url,
          href: `https://twitch.tv/${game.name}`,
          rank: index + 1,
        };
      });
      dispatch({ type: SET_GAMES, payload: [...games] });
    })
    .catch((error) => {
      console.log(error);
    });
};
