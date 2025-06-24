import { NavLink } from "react-router-dom";
import { HeartIcon } from "@phosphor-icons/react";
import Portal from "../../components/Portal";
import Favorites from "./Favorites";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/globalContext";

export default function Header() {

const [showFavorites, setShowFavorites] = useState(false);
const { favorites, getFromStorage } = useGlobalContext();

useEffect(() => {
  getFromStorage("preferiti");
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <>
      <div className="perfect-center rounded-lg sticky top-10 z-50 shadow-lg shadow-neutral-base-300/50 mt-10 p-section font-body-base-regular text-neutral-text-high container-responsive bg-neutral-base-300/80 backdrop-blur-sm max-w-[92%]">
        <nav className="w-full">
          <ul className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-2">
              <li className="px-2 py-1 rounded-md min-h-12 perfect-center"><NavLink to="/">Home</NavLink></li>
              <li className="px-2 py-1 rounded-md min-h-12 perfect-center"><NavLink to="/compare">Confronta</NavLink></li>
            </div>
            <li className="relative">
              <button onClick={() => setShowFavorites(!showFavorites)} className="lg:hover:bg-accent-soft rounded-full perfect-center p-2 aspect-square min-h-12">
                <HeartIcon size={28} weight="fill" className="text-accent-text-low" />
              </button>
              {
                favorites?.length > 0 ?
                <span className="absolute top-0 right-[-6px] aspect-square size-6 rounded-full font-body-s-bold perfect-center bg-accent-solid/40 backdrop-blur-sm text-white p-1">{favorites?.length}</span>
                :
                null
              }
            </li>
          </ul>
        </nav>
      </div>
      <Portal domElement="#root">
        <Favorites show={showFavorites} setShow={setShowFavorites}/>
      </Portal>
    </>
  );
}
