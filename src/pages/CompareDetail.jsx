import Selector from "../components/Selector";
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/globalContext";
import CompareCard from "../components/compareCard";
import heroPattern from "../assets/heroPattern.svg";

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
        {/* --- HERO ------------------------------------------------------------- */}
        <div className="h-[40vh] bg-neutral-base-300 rounded-xl overflow-hidden col-span-full" style={{backgroundImage: `url('${heroPattern}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="size-full bg-neutral-base-300/80 p-4">
            <h1 className="font-h1 font-effect md:max-w-1/2">Confronta due Videogiochi e scopri quello che fa per te</h1>
          </div>
        </div>

        {/* --- MAIN -------------------------------------------------------------- */}
        <div className={`col-span-full md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-8 row-grid bg-neutral-base-200 rounded-lg p-2 lg:p-4 gap-2 ${(Object.keys(games?.comparedGames[0]).length === 0 && Object.keys(games?.comparedGames[1]).length === 0) ? 'h-fit' : 'min-h-[60vh]'}`}>
          {/* --- FIRST SELECTOR ---------------- */}
          <div className="col-span-2 flex flex-col md:col-span-4 lg:col-span-6 rounded-lg">
            {
              Object.keys(games?.comparedGames[0]).length === 0 ? <Selector games={games?.allGames} position={0} /> : <CompareCard game={games?.comparedGames[0]} position={0} /> 
            }
            
          </div>

          {/* --- SECOND SELECTOR ---------------- */}
          <div className="col-span-2 flex flex-col md:col-span-4 lg:col-span-6 rounded-lg">
          {
              Object.keys(games?.comparedGames[1]).length === 0 ? <Selector games={games?.allGames} position={1} /> : <CompareCard game={games?.comparedGames[1]} position={1} /> 
          }
          </div>

        </div>


      </div>
    </>
  );
}
