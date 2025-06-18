import { useState, useCallback, useEffect } from "react";

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

  const handleChange = (e) => setQuery(e.target.value);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterValues = useCallback(debounce((query, array) => {
    const filterRes = array?.filter((item) => {
      const { title } = item;
      return title.trim().toLowerCase().includes(query.trim().toLowerCase());
    });
    dispatch({type: 'filterGames', payload: filterRes});

  }, 500), []);

  useEffect(() => {
    if(query.length !== 0 && array.length !== 0) {
      filterValues(query, array);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
 
  
  return {query, handleChange};
}
