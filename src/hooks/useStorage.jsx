
import { useState } from "react";

export default function useStorage() {

  // feedback storage
  const [feedback, setFeedback] = useState("");

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

   const removeFromStorage = (key) => key && (

    localStorage.removeItem(key),
    setFeedback("rimosso!"),
    setTimeout(() => setFeedback(""), 3000)

  )

  const addToStorage = (key, value) => {
    if(value) {

      const storedItem = getFromStorage(key);

      if(storedItem) {
        console.log("preferiti esistenti: ", storedItem)
        storedItem.push(value);
        console.log("preferiti updated: ", storedItem)
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
    addToStorage,
    removeFromStorage,
    getFromStorage,
  };

}
