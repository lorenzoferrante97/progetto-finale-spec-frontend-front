import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../contexts/globalContext";

export default function Detail() {

  const {id} = useParams();

  const {games, dispatch, getVideogame} = useGlobalContext();

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
      <div>Detail Page Single Videogame: {games?.activeGame?.title}</div>
    </>
  );
}
