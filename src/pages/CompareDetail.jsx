import Selector from "../components/Selector";
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/globalContext";

export default function CompareDetail() {

const { games, dispatch, getVideogames } = useGlobalContext();

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

  return (
    <>
      <div className="row-grid w-full gap-y-10">
        {/* --- HEADER ------------------------------------------------------------- */}
        <div className="col-span-full md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-8">
          <h1 className="font-h1 lg:text-center">Confronta due Videogiochi e scopri quello che fa per te</h1>
        </div>

        {/* --- MAIN -------------------------------------------------------------- */}
        <div className="col-span-full row-grid bg-neutral-base-200 rounded-lg p-4 min-h-[60vh] gap-2">
          {/* --- FIRST SELECTOR ---------------- */}
          <div className="col-span-2 perfect-center md:col-span-4 lg:col-span-6 border border-neutral-border p-2 lg:p-4 rounded-lg">
            <Selector games={games.allGames} />
          </div>

          {/* --- SECOND SELECTOR ---------------- */}
          <div className="col-span-2 perfect-center md:col-span-4 lg:col-span-6 border border-neutral-border p-2 lg:p-4 rounded-lg">
            <Selector games={games.allGames} />
          </div>

        </div>


      </div>
    </>
  );
}
