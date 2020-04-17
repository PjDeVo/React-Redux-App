import { GET_GAMES, SET_GAMES } from "../actions";

const initialState = {
  gamesLibrary: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
      };
    case SET_GAMES:
      return {
        ...state,
        gamesLibrary: action.payload,
      };
  }
  defult: return state;
};
