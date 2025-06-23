import { memo } from "react";
import { useGlobalContext } from "../contexts/globalContext";

export default memo(function Selector({games}) {

  const { dispatch } = useGlobalContext();

  // get selected videogame
  const handleChange = (e) => {
    const selectedGame = games?.find((game) => game.id === parseInt(e.target.value));
    if(selectedGame) {
      dispatch({type: 'compareGames', payload: selectedGame});
    }
    
  }

  return (
    <>
      <select onChange={handleChange} name="selector" id="selector" className="w-full min-h-12 rounded-md bg-neutral-base-300 px-4 py-2">
        <option value="scegli">Scegli...</option>
        {games?.map((game) => (
          <option key={game.id} value={game.id}>
            {game.title}
          </option>
        ))}
      </select>
    </>
  );
});
