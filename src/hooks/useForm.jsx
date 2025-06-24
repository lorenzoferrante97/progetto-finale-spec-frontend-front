import { useState, useCallback, useEffect } from "react";
import useFetch from "./useFetch";

export default function useForm(array, dispatch) {

  // --- QUERY -----------------------------------------------------------------------------
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  // --- DEBOUNCE --------------------------------------------------------------------------
  const debounce = (callback, delay) => {
    let interval;
  
    return (value1, value2) => {
      if (interval) clearTimeout(interval);
  
      interval = setTimeout(() => {
        callback(value1, value2);
      }, delay);
    };
  }

  const { getVideogamesByTitle, getVideogamesByCategory, getVideogamesByTitleAndCategory } = useFetch();

  const handleChange = (e) => setQuery(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  // --- RESET -----------------------------------------------------------------------------
  const handleResetCategory = () => { setCategory(''), dispatch({ type: "resetFilterGames"})}

  // const filterValues = useCallback(debounce((query, array) => {
  //   const filterRes = array?.filter((item) => {
  //     const { title } = item;
  //     return title.trim().toLowerCase().includes(query.trim().toLowerCase());
  //   });
  //   if(filterRes.length !== 0) {
  //     dispatch({type: 'filterGames', payload: filterRes});
  //   } else {
  //     dispatch({type: 'filterGames', payload: [], errorMessage: "Nessun risultato trovato"});
  //   }
  // }, 500), []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterValuesByTitle = useCallback(
    debounce(async (title) => {
      try {
        const res = await getVideogamesByTitle(title);
        dispatch({ type: "filterGames", payload: res });
      } catch (err) {
        console.error('Error to fetch videogames by title:', err.message);
      }
    }, 500),
  []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterValuesByCategory = useCallback(
    debounce(async (category) => {
      try {
        const res = await getVideogamesByCategory(category);
        dispatch({ type: "filterGames", payload: res });
      } catch (err) {
        console.error('Error to fetch videogames by category:', err.message);
      }
    }, 500),
  []);

   useEffect(() => {
     if(query.length !== 0 && array.length !== 0) {
      setCategory('');
      filterValuesByTitle(query);
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [query]);
 
   useEffect(() => {
     if(category.length !== 0 && array.length !== 0) {
      setQuery('');
      filterValuesByCategory(category);
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [category]);
 
  
  return {query, handleChange, category, handleCategoryChange, handleResetCategory};
}
