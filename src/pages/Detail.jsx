import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/globalContext";
import Badge from "../components/Badge";
import { StarIcon } from "@phosphor-icons/react";

export default function Detail() {

  const {id} = useParams();

  const {dispatch, getVideogame} = useGlobalContext();
  const { title, backdropUrl, category, rating, description } = useGlobalContext().games.activeGame;

  // suddividi description in paragrafi
  const descriptionParts = description?.split(".");
  console.log(description)

  


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
      {/* --- RATING ------------------------ */}
      <div className="p-section my-10 flex justify-between items-center gap-4 bg-neutral-base-300 rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <span className="font-body-s-regular text-neutral-text-low">Valutato dai giocatori</span>
          <span className="font-h1 text-accent-text-low">{rating} <span className="font-body-l-bold">/ 10</span></span>
        </div>
        <div className="aspect-square bg-accent-soft p-3 rounded-md">
          <StarIcon weight="fill" size={32} className="text-accent-text-low" />
        </div>
      </div>
      {/* --- DESCRIPTION ------------------- */}
      <div className="p-section mb-10 flex flex-col gap-4 p-4">
        {/* <p>{description}</p> */}
        {
          descriptionParts?.map( (text, index, array) => {
            if(index !== array.length - 1) {
              if ((index == 0) || ((index % 2 == 0) && (index !== 0))) {
                return <p key={index}>{text}. {array[index + 1]}</p>;
              }
            }
          })
        }
      </div>
    </>
  );
}
