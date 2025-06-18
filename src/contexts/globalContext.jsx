/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  // --- USE FETCH ---------------------------------------------------------------------------

  const {getVideogames} = useFetch();

  // --- VIDEOGAMES STATE -----------------------------------------------------------------------

  // const actions = {
  //   fetchAllGames: () => dispatch({ type: 'fetchAllGames' }),
  //   fetchGameById: () => dispatch({ type: 'fetchGameById', payload: id }),
  // };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'fetchAllGames':
        return getVideogames();
      case 'fetchGameById':
        return ;
      default:
        return state;
    }
  }

  const [games, dispatch] = useReducer(reducer, {games: [], activeGame: {}});
  
  

  const value = {games, dispatch};

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
