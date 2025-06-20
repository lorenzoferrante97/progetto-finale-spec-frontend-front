import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/globalContext";
import Badge from "../components/Badge";
import { StarIcon } from "@phosphor-icons/react";

export default function Detail() {

  const {id} = useParams();

  const {games, dispatch, getVideogame, addToStorage, feedback} = useGlobalContext();
  const { title,
    backdropUrl,
    category,
    rating,
    description,
    platform,
    releaseYear,
    developer,
    gameMode,
    theme } = useGlobalContext().games.activeGame;

  // suddividi description in paragrafi
  const descriptionParts = description?.split(".");
  


  useEffect(() => {
      (async () => {
        try {
          const res = await getVideogame(id);
          dispatch({type: 'fetchSingleGame', payload: res.videogame});
        } catch (err) {
          console.error('Errore durante il recupero:', err.message);
        }
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

  return (
    <>
    {/* --- HERO ---------------------------- */}
      <div className="w-full min-h-[40vh] flex items-end rounded-lg overflow-hidden" style={{backgroundImage: `url('${backdropUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="h-[20vh] p-2 flex flex-col gap-2 justify-end items-start bg-gradient-to-t from-neutral-base-300 to-transparent w-full">
          <Badge text={category} type="accent" className="w-fit"/>
          <h1 className="font-h1 backdrop-blur-md p-2 overflow-hidden rounded-md">{title}</h1>
        </div>
      </div>
      {/* --- RATING + ACTIONS ---------------------------------------------------------- */}
      <div className="p-section my-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-neutral-base-300 rounded-lg p-4">
        {/* --- RATING ------------------------ */}
          <div className="flex flex-col gap-2">
            <span className="font-body-s-regular text-neutral-text-low">Valutato dai giocatori</span>
            <div className="flex items-center gap-2">
              <div className="aspect-square bg-accent-base-200 p-3 rounded-md">
                <StarIcon weight="fill" size={32} className="text-accent-solid" />
              </div>
              <span className="font-h1 text-accent-text-low">{rating} <span className="font-body-l-bold">/ 10</span></span>
            </div>
          </div>
          {/* --- ACTIONS --------------------- */}
          <div className="flex items-center gap-2">
            <button className="lg:hover:cursor-pointer transition-base font-body-base-bold min-h-12 lg:hover:bg-accent-solid lg:hover:border-accent-solid lg:hover:text-white w-full md:w-fit border-2 border-accent-border-strong text-accent-text-high px-4 py-2 rounded-md" onClick={() => addToStorage("preferiti", games.activeGame)}>{feedback !== "" ? feedback : "Aggiungi ai Preferiti"}</button>

          </div>
      </div>
      {/* --- INFO --------------------------------------------------------------- */}
      <div className="p-section mb-10 row-grid gap-y-8 gap-x-20 p-4">
        {/* --- DESCRIPTION ------------------- */}
        <div className="flex flex-col gap-4 col-span-full lg:col-span-7">
          {
            descriptionParts?.map( (text, index, array) => {
              if(index !== array.length - 1) {
                if ((index == 0) || ((index % 2 == 0) && (index !== 0))) {
                  return <p className="text-neutral-text-low" key={index}>{text}. {array[index + 1]}</p>;
                }
              }
            })
          }
        </div>
        <div className="flex flex-col gap-6 col-span-full lg:col-span-5">
          {/* --- PLATFORM ---------------------- */}
          <div className="flex flex-col gap-2">
            <span className="font-body-m-regular text-neutral-text-high">Piattaforme</span>
            <div className="flex flex-wrap gap-1">
              {
                platform?.map( (platform, i) => <Badge key={i} text={platform} type="accent" className="w-fit"/> )
              }
            </div>
          </div>

          {/* --- THEMES ---------------------- */}
          <div className="flex flex-col gap-2">
            <span className="font-body-m-regular text-neutral-text-high">Temi Principali</span>
            <div className="flex flex-wrap gap-1">
              {
                theme?.map( (theme, i) => <Badge key={i} text={theme} type="accent" className="w-fit"/> )
              }
            </div>
          </div>

          {/* --- GAME MODE ---------------------- */}
          <div className="flex flex-col gap-2">
            <span className="font-body-m-regular text-neutral-text-high">Modalità di gioco</span>
            <div className="flex flex-wrap gap-1">
              {
                gameMode?.map( (mode, i) => <Badge key={i} text={mode} type="accent" className="w-fit"/> )
              }
            </div>
          </div>

          {/* --- DEVELOPER ---------------------- */}
          <div className="flex flex-col gap-2">
            <span className="font-body-m-regular text-neutral-text-high">Sviluppatore</span>
            <div className="flex flex-wrap gap-1">
            <Badge text={developer} type="accent" className="w-fit"/>
            </div>
          </div>

          {/* --- RELEASE YEAR ---------------------- */}
          <div className="flex flex-col gap-2">
            <span className="font-body-m-regular text-neutral-text-high">Anno di uscita</span>
            <div className="flex flex-wrap gap-1">
            <Badge text={releaseYear} type="accent" className="w-fit"/>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}
