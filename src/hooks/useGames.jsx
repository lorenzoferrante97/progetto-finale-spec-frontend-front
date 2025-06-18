import { useReducer } from "react";

export default function useGames() {

// --- VIDEOGAMES STATE -----------------------------------------------------------------------
const reducer = (state, action) => {
  switch (action.type) {
    case 'fetchAllGames':
      return {...state, allGames: action.payload};
    case 'fetchSingleGame':
      return {...state, activeGame: action.payload};
    case 'orderGames':
      return {...state, allGames: action.payload};
    default:
      return state;
  }
}

const [games, dispatch] = useReducer(reducer, {allGames: [], activeGame: {}});

  return {games, dispatch};
}
