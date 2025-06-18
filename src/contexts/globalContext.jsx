/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  // --- USE FETCH ---------------------------------------------------------------------------
  const {getVideogames} = useFetch();

  // --- VIDEOGAMES STATE -----------------------------------------------------------------------
  const reducer = (state, action) => {
    switch (action.type) {
      case 'fetchAllGames':
        return {...state, allGames: action.payload};
      default:
        return state;
    }
  }

  const [games, dispatch] = useReducer(reducer, {allGames: [], activeGame: {}});
  
  

  const value = {games, dispatch, getVideogames};

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };