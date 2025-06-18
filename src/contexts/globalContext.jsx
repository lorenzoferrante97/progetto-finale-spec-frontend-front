/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";
import useGames from "../hooks/useGames";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  // --- USE FETCH ---------------------------------------------------------------------------
  const {getVideogames, getVideogame} = useFetch();

  // --- USE GAMES ---------------------------------------------------------------------------
  const {games, dispatch} = useGames();
  
  

  const value = {games, dispatch, getVideogames, getVideogame};

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };