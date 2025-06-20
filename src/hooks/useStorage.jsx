
export default function useStorage() {

  const addToStorage = (value) => {
    if(value) {
      if(typeof value === 'string') {
        localStorage.setItem('value', value);
      } else {
        localStorage.setItem('value', JSON.stringify(value));
      }
    }
  }

  const removeFromStorage = (value) => value && localStorage.removeItem('value');
 

  const getFromStorage = (value, type = 'string') => {
   if(value) {
    switch(type) {
      case 'string':
        return localStorage.getItem(value);
      default:
        return JSON.parse(localStorage.getItem(value));
    }
   }
  }

  return {
    addToStorage,
    removeFromStorage,
    getFromStorage,
  };

}
