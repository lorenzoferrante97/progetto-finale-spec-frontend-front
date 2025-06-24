export default function useFetch() {

  const apiBaseUrl = import.meta.env.VITE_API_URL;

  const getVideogame = async (id) => {
    const res = await fetch(`${apiBaseUrl}/videogames/${id}`);

    if(!res.ok) {
      throw new Error('Failed to fetch videogame');
    }

    const resJson = await res.json();

    return resJson;
  }

  const getVideogames = async () => {

    const res = await fetch(`${apiBaseUrl}/videogames`);

    if(!res.ok) {
      throw new Error('Failed to fetch videogames');
    }

    const resJson = await res.json();

    // --- Get full videogames info -----------------------------
    const allInfo = await Promise.allSettled(resJson.map(item => getVideogame(item.id)));

    // --- CoverUrl added to results ----------------------------
    const fullRes = resJson.map(item => {
      return {...item, coverUrl: allInfo[item.id-1].value?.videogame?.coverUrl}

    });

    return fullRes;
  }

  const getVideogamesByTitle = async (title) => {
    const res = await fetch(`${apiBaseUrl}/videogames?search=${title}`);

    if(!res.ok) {
      throw new Error('Failed to fetch videogames');
    }

    const resJson = await res.json();

    // --- Get full videogames info -----------------------------
    const allInfo = await Promise.allSettled(resJson.map(item => getVideogame(item.id)));
    console.log("allInfo getbytitle: ", allInfo);

    // --- CoverUrl added to results ----------------------------
    const fullRes = allInfo?.map(item => {
      return {...item?.value?.videogame, coverUrl: item?.value?.videogame?.coverUrl};
    });

    return fullRes;
  }

  const getVideogamesByCategory = async (category) => {
    const res = await fetch(`${apiBaseUrl}/videogames?category=${category}`);

    if(!res.ok) {
      throw new Error('Failed to fetch videogames');
    }

    const resJson = await res.json();

    // --- Get full videogames info -----------------------------
    const allInfo = await Promise.allSettled(resJson.map(item => getVideogame(item.id)));

    // --- CoverUrl added to results ----------------------------
    const fullRes = allInfo?.map(item => {
      return {...item?.value?.videogame, coverUrl: item?.value?.videogame?.coverUrl};
    });

    return fullRes;
  }

  const getVideogamesByTitleAndCategory = async (title, category) => {
    const res = await fetch(`${apiBaseUrl}/videogames?search=${title}&category=${category}`);

    if(!res.ok) {
      throw new Error('Failed to fetch videogames');
    }

    const resJson = await res.json();

    // --- Get full videogames info -----------------------------
    const allInfo = await Promise.allSettled(resJson.map(item => getVideogame(item.id)));

    // --- CoverUrl added to results ----------------------------
    const fullRes = allInfo?.map(item => {
      return {...item?.value?.videogame, coverUrl: item?.value?.videogame?.coverUrl};
    });

    return fullRes;
  }

  return {getVideogames, getVideogame, getVideogamesByTitle, getVideogamesByCategory, getVideogamesByTitleAndCategory};
}