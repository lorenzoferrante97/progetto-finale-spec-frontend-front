import { useGlobalContext } from "../contexts/globalContext";
import { useEffect } from "react";
import Card from "../components/Card";

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
      <div className="row-grid gap-x-2 gap-y-4">
        {
          renderList?.map((game) => <Card key={game.id} game={game}/>)
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
