import { NavLink } from "react-router-dom";
import { HeartIcon } from "@phosphor-icons/react";
import Portal from "../../components/Portal";
import Favorites from "./Favorites";
import { useState } from "react";

export default function Header() {

const [showFavorites, setShowFavorites] = useState(false);


  return (
    <>
      <div className="perfect-center rounded-lg sticky top-10 z-50 shadow-lg shadow-neutral-base-300/50 mt-10 p-section font-body-base-regular text-neutral-text-high container-responsive bg-neutral-base-300/80 backdrop-blur-sm max-w-[92%]">
        <nav className="w-full">
          <ul className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-2">
              <li className="px-2 py-1 rounded-md min-h-12 perfect-center"><NavLink to="/">Home</NavLink></li>
              <li className="px-2 py-1 rounded-md min-h-12 perfect-center"><NavLink to="/">Confronta</NavLink></li>
            </div>
            <li><button onClick={() => setShowFavorites(!showFavorites)} className="lg:hover:bg-accent-soft rounded-full perfect-center p-2 aspect-square min-h-12"><HeartIcon size={20} weight="fill" className="text-accent-text-low" /></button></li>
          </ul>
        </nav>
      </div>
      <Portal domElement="#root">
        <Favorites show={showFavorites} setShow={setShowFavorites}/>
      </Portal>
    </>
  );
}
