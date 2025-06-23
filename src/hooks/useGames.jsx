import { useReducer, useState } from "react";

export default function useGames() {

  // --- NOT FOUND ERROR ---------------------------------------------------------------------
  const [error, setError] = useState({
    bool: false,
    message: ""
  });

// --- VIDEOGAMES STATE -----------------------------------------------------------------------
const reducer = (state, action) => {

  switch (action.type) {
    case 'fetchAllGames':
      return {...state, allGames: action.payload};
    case 'fetchSingleGame':
      return {...state, activeGame: action.payload};
    case 'orderGames':
      if(state.allGames.length !== action.payload.length) {
        return {...state, filteredGames: action.payload};
        } else {
          return {...state, allGames: action.payload};
        }
    case 'filterGames':
      if((state.allGames.length !== action.payload.length) && (action.payload.length !== 0)) {
        setError({bool: false, message: ""});
        return {...state, filteredGames: action.payload};
        } else {
          setError({bool: true, message: action.errorMessage});
          return {...state, filteredGames: action.payload};
        }
    case 'compareGames':
      return {...state, comparedGames: [...state.comparedGames, action.payload]};
      
  }
}

const [games, dispatch] = useReducer(reducer, {allGames: [], filteredGames: [], activeGame: {}, comparedGames: []});

  return {games, error, dispatch};
}
