/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  // --- USE FETCH ---------------------------------------------------------------------------
  const {getVideogames, getVideogame} = useFetch();

  // --- VIDEOGAMES STATE -----------------------------------------------------------------------
  const reducer = (state, action) => {
    switch (action.type) {
      case 'fetchAllGames':
        return {...state, allGames: action.payload};
      case 'fetchSingleGame':
        return {...state, activeGame: action.payload}
      default:
        return state;
    }
  }

  const [games, dispatch] = useReducer(reducer, {allGames: [], activeGame: {}});
  
  

  const value = {games, dispatch, getVideogames, getVideogame};

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };