export default function Selector({games}) {

  return (
    <>
      <select name="selector" id="selector" className="w-full min-h-12 rounded-md bg-neutral-base-300 px-4 py-2">
        <option defaultValue="">Scegli...</option>
        {console.log("allGames: ", games)}
        {games?.map((game) => (
          <option key={game.id} value={game.id}>
            {game.title}
          </option>
        ))}
      </select>
    </>
  );
}
