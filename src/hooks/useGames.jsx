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
    case 'filterGames':
      if(state.allGames.length !== action.payload.length) {
      return {...state, filteredGames: action.payload};
      } else {
        return {...state, filteredGames: []};
      }
  }
}

const [games, dispatch] = useReducer(reducer, {allGames: [], filteredGames: [], activeGame: {}});

  return {games, dispatch};
}
