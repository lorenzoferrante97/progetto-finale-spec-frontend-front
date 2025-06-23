/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer, useState } from "react";
import useFetch from "../hooks/useFetch";
import useGames from "../hooks/useGames";
import useSort from "../hooks/useSort";
import useForm from "../hooks/useForm";
import useStorage from "../hooks/useStorage";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  // --- USE FETCH ---------------------------------------------------------------------------
  const {getVideogames, getVideogame, getVideogamesByTitle, getVideogamesByCategory, getVideogamesByTitleAndCategory} = useFetch();

  // --- USE GAMES ---------------------------------------------------------------------------
  const {games, error, dispatch} = useGames();

   // --- USE FORM ---------------------------------------------------------------------------
   const {query, handleChange} = useForm(games?.allGames, dispatch);

  // --- USE SORT ---------------------------------------------------------------------------
  const {sortedData, handleSort, sortBy, sortOrder} = useSort((games?.filteredGames?.length > 0 && (query?.length > 0)) ? games?.filteredGames : games?.allGames, "title", "desc");

  // --- USE STORAGE ---------------------------------------------------------------------------
  const {feedback, isFavorite, favorites,addToStorage, removeFromStorage, getFromStorage, checkFavorite} = useStorage();
  

  const value = {
    games,
    error,
    sortedData,
    sortBy,
    sortOrder,
    query,
    feedback,
    isFavorite,
    favorites,
    handleSort,
    dispatch,
    getVideogames,
    getVideogame,
    handleChange,
    addToStorage,
    removeFromStorage,
    getFromStorage,
    checkFavorite,
    getVideogamesByTitle,
    getVideogamesByCategory,
    getVideogamesByTitleAndCategory
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };