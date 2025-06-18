import { useGlobalContext } from "../contexts/globalContext";
import { useEffect } from "react";

export default function Home() {

  const {games, dispatch, getVideogames, sortedData, handleSort, sortBy, sortOrder} = useGlobalContext();

  useEffect(() => {
    (async () => {
      try {
        const Videogames = await getVideogames();
        dispatch({type: 'fetchAllGames', payload: Videogames});
      } catch (err) {
        console.error('Errore durante il recupero:', err.message);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({type: 'orderGames', payload: sortedData});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, sortOrder]);

  return (
    <>
      <div className="">
        {
          games?.allGames?.map((game) => (
            <div key={game.id} className="mb-3">
              <p>{game.title}</p>
              <p>{game.category}</p>
              </div>
          ))
        }
        <button className="hover:cursor-pointer text-red-400" onClick={() => handleSort("title")}>Sort By Title --- {sortOrder === 1 ? "asc" : "desc"}</button>
        <br></br>
        <button className="hover:cursor-pointer text-red-400" onClick={() => handleSort("category")}>Sort By Category --- {sortOrder === 1 ? "asc" : "desc"}</button>
      </div>
    </>
  );
}
