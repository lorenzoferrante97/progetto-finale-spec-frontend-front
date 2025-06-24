import { useGlobalContext } from "../contexts/globalContext";
import { useEffect } from "react";
import Card from "../components/Card";
import Filters from "./sections/Filters";

export default function Home() {

  const {
    games,
    error,
    dispatch,
    getVideogames,
    sortedData,
    handleSort,
    sortBy,
    sortOrder,
    query,
    category,
    handleChange
  } = useGlobalContext();

  // --- RENDER CONDIZIONALE ------------------------------------------------------------------
  const renderList = (games?.filteredGames?.length > 0 && ((query?.length > 0) || (category?.length > 0))) ? games?.filteredGames : games?.allGames;

  useEffect(() => {
    (async () => {
      try {
        const Videogames = await getVideogames();
        dispatch({type: 'setCategories', payload: Videogames?.map((game) => game.category)});
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
      {/* --- HERO ------------------------------------------------------------- */}
      <div className="min-h-[40vh]">
        <h1 className="font-h1">Scopri e confronta i tuoi videogiochi preferiti</h1>
      </div>
    
      {/* --- SEARCH ------------------------------------------------------------- */}
      <div className="p-section flex flex-col gap-2 font-body-base-bold">
        <label htmlFor="search">Cerca per titolo</label>
        <input name="search" value={query} onChange={handleChange} type="text" placeholder="scrivi qui" className="w-full px-4 py-2 min-h-12 bg-neutral-base-300 rounded-md focus-state font-body-base-regular"/>
      </div>

      <div className="row-grid gap-x-2 gap-y-10 p-section bg-neutral-base-200 rounded-lg">
        {/* --- FILTERS ---------------- */}
        <div className="col-span-full">
          <Filters items={games?.categories} />
        </div>
        <div className="col-span-full flex flex-wrap gap-2">
          <button className="bg-neutral-soft max-sm:w-full rounded-md px-3 py-2 max-lg:min-h-12" onClick={() => handleSort("title")}>Titolo <span className="bg-neutral-base-300 p-1 rounded-sm transition-base font-body-s-light">{(sortOrder === 1) && (sortBy === "title") ? "A-Z" : "Z-A"}</span></button>
          <button className="bg-neutral-soft max-sm:w-full rounded-md px-3 py-2 max-lg:min-h-12" onClick={() => handleSort("category")}>Categoria <span className="bg-neutral-base-300 p-1 rounded-sm transition-base font-body-s-light">{(sortOrder === 1) && (sortBy === "category") ? "A-Z" : "Z-A"}</span></button>
        </div>
        {
          error?.bool ?
          <p className="min-w-60">{error?.message}</p>
          : 
          renderList?.map((game) => <Card key={game.id} game={game}/>)
          
        }
      </div>
    </>
  );
};
