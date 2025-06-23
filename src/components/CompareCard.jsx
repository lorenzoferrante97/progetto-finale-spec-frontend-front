import Badge from "./Badge";
import { StarIcon } from "@phosphor-icons/react";

export default function CompareCard({ game }) {

  return (
    <>
      <div className="flex flex-col gap-2 p-1 rounded-md bg-neutral-base-300">
        {/* --- COVER ---------------- */}
        <figure className="overflow-hidden rounded-sm">
          <img src={game?.coverUrl} alt={game?.title} />
        </figure>
        {/* --- RATING ---------------- */}
        <div className="h-20 flex flex-col items-center border-b border-neutral-border/40 px-2 gap-1">
        <span className="font-body-s-regular text-neutral-text-low">Valutato dai giocatori</span>
          <span className="font-body-s-bold">{game?.rating}<span className="font-body-s-light"> / 10</span></span>
        </div>
        {/* --- TITLE ---------------- */}
        <div className="h-20 flex items-center border-b border-neutral-border/40 px-2 ">
          <h2 className="font-h6 font-semibold">{game?.title}</h2>
        </div>
        {/* --- CATEGORY ---------------- */}
        <div className="h-20 flex items-center border-b border-neutral-border/40 px-2">
          <Badge text={game?.category} type="accent" />
        </div>
        {/* --- PLATFORM ---------------- */}
        <div className="h-20 flex items-center border-b border-neutral-border/40 px-2">
          <Badge text={game?.platform} type="accent" />
        </div>
        {/* --- DESCRIPTION ---------------- */}
        <div className="h-20 flex items-center border-b border-neutral-border/40 px-2">
          <p>{game?.description}</p>
        </div>
        {/* --- THEME ---------------- */}
        <div className="h-20 flex items-center border-b border-neutral-border/40 px-2">
          <Badge text={game?.theme} type="accent" />
        </div>
        {/* --- DEVELOPER ---------------- */}
        <div className="h-20 flex items-center border-b border-neutral-border/40 px-2">
          <Badge text={game?.developer} type="accent" />
        </div>
        {/* --- GAME MODE ---------------- */}
        <div className="h-20 flex items-center border-b border-neutral-border/40 px-2">
          <Badge text={game?.gameMode} type="accent" />
        </div>
        {/* --- RELEASE YEAR ---------------- */}
        <div className="h-20 flex items-center border-b border-neutral-border/40 px-2">
          <Badge text={game?.releaseYear} type="accent" />
        </div>
      </div>
    </>
  );
}
