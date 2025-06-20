import { XIcon } from "@phosphor-icons/react"; 
import { useGlobalContext } from "../../contexts/globalContext";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

export default function Favorites({ show }) {

  const { getFromStorage } = useGlobalContext();

  // favorites
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = getFromStorage("preferiti");
    if(storedFavorites) {
      setFavorites(storedFavorites);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={show ? "h-screen text-neutral-text-high w-full lg:w-[40%] fixed right-0 top-0 bg-neutral-base-200/80 backdrop-blur-sm z-[100]" : "hidden"}>
        <div className="container-responsive p-section mt-10 flex flex-col gap-8">
          {/* HEADER ---------------------------- */}
          <div className="flex items-center justify-between">
            <span className="font-h2">Preferiti</span>
            <button className="lg:hover:cursor-pointer perfect-center transition-base aspect-square w-10 rounded-full bg-error-bg text-error-text"><XIcon size={20} weight="bold" /></button>
          </div>
          {/* MAIN ---------------------------- */}
          <div className="row-grid bg-neutral-base-300/50 px-4 py-8 rounded-lg gap-4">
            {
              favorites.map((favorite) => <Card key={favorite.id} game={favorite} type="favorites" /> )
            }
          </div>
        </div>
      </div>
    </>
  );
}
