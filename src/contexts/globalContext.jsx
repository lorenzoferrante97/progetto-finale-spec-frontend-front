import { createContext, useContext, useReducer, useState } from "react";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  // --- VIDEOGAMES STATE -----------------------------------------------------------------------

  // const actions = {
  //   fetchAllGames: () => dispatch({ type: 'fetchAllGames' }),
  //   fetchGameById: () => dispatch({ type: 'fetchGameById', payload: id }),
  // };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'fetchAllGames':
        return ;
      case 'fetchGameById':
        return ;
      default:
        return state;
    }
  }

  const [games, dispatch] = useReducer(reducer, {games: [], activeGame: {}});
  
  

  const value = {};

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
