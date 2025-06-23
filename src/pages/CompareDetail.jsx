import Selector from "../components/Selector";
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/globalContext";
import CompareCard from "../components/compareCard";

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
        <div className={`col-span-full row-grid bg-neutral-base-200 rounded-lg p-2 lg:p-4 gap-2 ${games?.comparedGames?.length === 0 ? 'h-fit' : 'min-h-[60vh]'}`}>
          {/* --- FIRST SELECTOR ---------------- */}
          <div className="col-span-2 flex flex-col md:col-span-4 lg:col-span-6 rounded-lg">
            {
              games?.comparedGames?.length === 0 ? <Selector games={games?.allGames} /> : <CompareCard game={games?.comparedGames[0]} /> 
            }
            
          </div>

          {/* --- SECOND SELECTOR ---------------- */}
          <div className="col-span-2 flex flex-col md:col-span-4 lg:col-span-6 rounded-lg">
          {
              (games?.comparedGames?.length === 0) || (games?.comparedGames?.length === 1) ? <Selector games={games?.allGames} /> : <CompareCard game={games?.comparedGames[1]} /> 
          }
          </div>

        </div>


      </div>
    </>
  );
}
