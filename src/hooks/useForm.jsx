import { useState, useCallback, useEffect } from "react";
import useFetch from "./useFetch";

export default function useForm(array, dispatch) {

  // --- QUERY -----------------------------------------------------------------------------
  const [query, setQuery] = useState('');
  // const [filteredArray, setFilteredArray] = useState(array);

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

  const { getVideogamesByTitle } = useFetch();

  const handleChange = (e) => setQuery(e.target.value);

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
  const filterValues = useCallback(
    debounce(async (title) => {
      try {
        const res = await getVideogamesByTitle(title);
        dispatch({ type: "filterGames", payload: res });
      } catch (err) {
        console.error('Error to fetch videogames by title:', err.message);
      }
    }, 500), []);

   useEffect(() => {
     if(query.length !== 0 && array.length !== 0) {
       filterValues(query);
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [query]);
 
  
  return {query, handleChange};
}
