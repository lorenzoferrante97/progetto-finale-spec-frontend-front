import { useGlobalContext } from "../contexts/globalContext";
import { useEffect } from "react";

export default function Home() {

  const {games, dispatch, getVideogames} = useGlobalContext();

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
      <div className="">
        {
          games?.allGames?.map((game) => (
            <div key={game.id}>{game.title}</div>
          ))
        }
      </div>
    </>
  );
}
