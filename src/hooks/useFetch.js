

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

// get all videogames --------------------------------------------------------
const getVideogames = async () => {
  const res = await fetch(`${apiBaseUrl}`);

  if(!res.ok) {
    throw new Error('Failed to fetch videogames');
  }

  const resJson = await res.json();

  return resJson;
}

export default {getVideogames};