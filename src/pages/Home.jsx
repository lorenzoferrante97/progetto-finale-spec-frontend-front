import { useGlobalContext } from "../contexts/globalContext";
import { useEffect } from "react";

export default function Home() {

  const {
    games,
    dispatch,
    getVideogames,
    sortedData,
    handleSort,
    sortBy,
    sortOrder,
    query,
    handleChange
  } = useGlobalContext();

  // --- RENDER CONDIZIONALE ------------------------------------------------------------------
  const renderList = games?.filteredGames?.length > 0 ? games?.filteredGames : games?.allGames;

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
          renderList?.map((game) => (
            <div key={game.id} className="mb-3">
              <p>{game.title}</p>
              <p>{game.category}</p>
              </div>
          ))
        }
        <button className="hover:cursor-pointer text-red-400" onClick={() => handleSort("title")}>Sort By Title --- {sortOrder === 1 ? "asc" : "desc"}</button>
        <br></br>
        <button className="hover:cursor-pointer text-red-400" onClick={() => handleSort("category")}>Sort By Category --- {sortOrder === 1 ? "asc" : "desc"}</button>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <input name="search" value={query} onChange={handleChange} type="text" placeholder="scrivi qui"/>
      </div>
    </>
  );
};
