
import { useState } from "react";

export default function useStorage() {

  // feedback storage
  const [feedback, setFeedback] = useState("");
  const [isfavorite, setIsFavorite] = useState(false);

  const checkFavorite = (id) => {
    const storedItem = getFromStorage("preferiti");
    if(storedItem) {
      const isFavorite = storedItem.some((item) => item.id === id);
      setIsFavorite(isFavorite);
    }
    
  }

  const getFromStorage = (key, type) => {
    if(key) {
     switch(type) {
       case 'string':
         return localStorage.getItem(key);
       default:
         return JSON.parse(localStorage.getItem(key));
     }
    }
   }

   const removeFromStorage = (key, item) => {
    if(key && item) {
      const storedItem = getFromStorage(key);
      if(storedItem) {
        storedItem.splice(storedItem.indexOf(item), 1);
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(storedItem));
        setFeedback("rimosso!");
        setTimeout(() => setFeedback(""), 3000);
      }
    }
   }

  const addToStorage = (key, value) => {
    if(value) {

      const storedItem = getFromStorage(key);

      if(storedItem) {
        storedItem.push(value);
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(storedItem));
        setFeedback("aggiunto!")
        setTimeout(() => setFeedback(""), 3000);
      } else {
        localStorage.setItem(key, JSON.stringify([value]));
        setFeedback("aggiunto!")
        setTimeout(() => setFeedback(""), 3000);
      }
    }
  }

  return {
    feedback,
    isfavorite,
    addToStorage,
    removeFromStorage,
    getFromStorage,
    checkFavorite
  };

}
