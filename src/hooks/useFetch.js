export default function useFetch() {

  const apiBaseUrl = import.meta.env.VITE_API_URL;

  const getVideogames = async () => {

    const res = await fetch(`${apiBaseUrl}/videogames`);

    if(!res.ok) {
      throw new Error('Failed to fetch videogames');
    }

    const resJson = await res.json();

    return resJson;
  }

  const getVideogame = async (id) => {
    const res = await fetch(`${apiBaseUrl}/videogames/${id}`);

    if(!res.ok) {
      throw new Error('Failed to fetch videogame');
    }

    const resJson = await res.json();

    return resJson;
  }

  return {getVideogames, getVideogame};
}