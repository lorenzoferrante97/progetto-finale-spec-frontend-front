import { memo } from "react";
import Badge from "./Badge";
import { NavLink } from "react-router-dom";

export default memo(function Card({ game }) {


  const {id, title, category} = game;

  return (
    <>
      <NavLink to={`/game/${id}`} className="rounded-lg col-span-full md:col-span-2 lg:col-span-4 bg-neutral-base-300 p-2 transition-base hover:bg-gradient-to-t hover:from-accent-soft/50 hover:to-neutral-base-300">
        <div className="">

          {/* image */}

          <div className="flex flex-col gap-2">
          <span className="font-body-base-bold text-neutral-text-high">{title}</span>
          <Badge text={category} type="accent" className="w-fit"/>
          </div>

        </div>
      </NavLink>
    </>
  );
});

