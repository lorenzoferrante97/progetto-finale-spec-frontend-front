
import { useState } from "react";

export default function useStorage() {

  // favorites
    const [favorites, setFavorites] = useState([]);

  // feedback storage
  const [feedback, setFeedback] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const checkFavorite = (id) => {
    const storedItem = getFromStorage("preferiti");
    if(storedItem) {
      const isFavorite = storedItem.some((item) => item.id === id);
      setIsFavorite(isFavorite);
    }
    
  }

  const getFromStorage = (key) => {
    if(key) {
      const storedItem = JSON.parse(localStorage.getItem(key));
      setFavorites(storedItem);
      return storedItem;
    }
   }

   const removeFromStorage = (key, item) => {
    if(key && item) {
      const storedItem = getFromStorage(key);
      if(storedItem) {
        storedItem.splice(storedItem.indexOf(item), 1);
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(storedItem));
        setIsFavorite(false);
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
        setIsFavorite(true);
        setFeedback("aggiunto!")
        setTimeout(() => setFeedback(""), 3000);
      } else {
        localStorage.setItem(key, JSON.stringify([value]));
        setIsFavorite(true);
        setFeedback("aggiunto!")
        setTimeout(() => setFeedback(""), 3000);
      }
    }
  }

  return {
    feedback,
    isFavorite,
    favorites,
    addToStorage,
    removeFromStorage,
    getFromStorage,
    checkFavorite
  };

}
