import { memo } from "react";
import Badge from "./Badge";
import { NavLink } from "react-router-dom";
import { HeartIcon } from "@phosphor-icons/react";
import { useGlobalContext } from "../contexts/globalContext";

export default memo(function Card({ game, type }) {


  const {id, title, category, coverUrl} = game;

  const { addToStorage } = useGlobalContext();

  return (
    <>
      <NavLink to={`/videogame/${id}`} className={`relative rounded-lg bg-neutral-base-300 p-1 transition-base hover:bg-gradient-to-t hover:from-accent-soft/50 hover:to-neutral-base-300 ${type === "favorites" ? "w-full" : "col-span-2"}`}>
        <div className="flex flex-col gap-2">

          {/* image */}
          <div className="relative">
            <figure className="aspect-[2/3] overflow-hidden rounded-[12px]">
              <img src={coverUrl} alt={title} className="image-responsive brightness-[115%] contrast-[105%]"/>
            </figure>
            {
              type !== "favorites" && (
                <div className="absolute h-full bottom-0 left-0 p-2 bg-gradient-to-t from-neutral-base-300 to-transparent flex flex-col justify-end gap-2 w-full">
                  <Badge text={category} type="accent" className="w-fit"/>
                  <span className="font-body-s-bold text-neutral-text-high">{title}</span>
                </div>
              )
            }
          </div>

        </div>

        {
          type !== "favorites" &&
            <div className="lg:hover:cursor-pointer transition-base absolute z-30 top-[-8px] right-[-8px] rounded-full bg-accent-solid p-2" onClick={(e) => {e.preventDefault(); e.stopPropagation(); addToStorage("preferiti", game)}}>
              <HeartIcon size={16} weight="fill" className="text-white" />
            </div>
        }

      </NavLink>
    </>
  );
});

