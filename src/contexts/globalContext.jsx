/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";
import useGames from "../hooks/useGames";
import useSort from "../hooks/useSort";
import useForm from "../hooks/useForm";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  // --- USE FETCH ---------------------------------------------------------------------------
  const {getVideogames, getVideogame} = useFetch();

  // --- USE GAMES ---------------------------------------------------------------------------
  const {games, dispatch} = useGames();

  // --- USE SORT ---------------------------------------------------------------------------
  const {sortedData, handleSort, sortBy, sortOrder} = useSort(games?.filteredGames?.length > 0 ? games?.filteredGames : games?.allGames, "title", "desc");

  // --- USE FORM ---------------------------------------------------------------------------
  const {query, handleChange} = useForm(games?.allGames, dispatch);
  

  const value = {
    games,
    sortedData,
    sortBy,
    sortOrder,
    query,
    handleSort,
    dispatch,
    getVideogames,
    getVideogame,
    handleChange
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };