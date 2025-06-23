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
        <div className="h-44 perfect-center flex-col border-b border-neutral-border/40 px-2 gap-3">
          <span className="font-body-s-regular text-neutral-text-low">Valutato dai giocatori</span>
          <span className="font-h1 text-accent-text-low">{game?.rating}<span className="font-body-base-regular text-accent-text-high"> / 10</span></span>
        </div>
        {/* --- TITLE ---------------- */}
        <div className="h-44 perfect-center flex items-center border-b border-neutral-border/40 px-2 ">
          <h2 className="font-h6 font-semibold">{game?.title}</h2>
        </div>
        {/* --- CATEGORY ---------------- */}
        <div className="h-44 flex items-center md:perfect-center border-b border-neutral-border/40 px-2">
          <Badge text={game?.category} type="accent" />
        </div>
        {/* --- PLATFORM ---------------- */}
        <div className="h-44 flex flex-col gap-1 items-start justify-center md:perfect-center border-b border-neutral-border/40 px-2">
          {
            game?.platform?.map((platform) => (
              <Badge key={platform} text={platform} type="accent" />
            ))
          }
        </div>
        {/* --- THEME ---------------- */}
        <div className="h-44 flex flex-col gap-1 items-start justify-center md:perfect-center border-b border-neutral-border/40 px-2">
          {
            game?.theme?.map((theme) => (
              <Badge key={theme} text={theme} type="accent" />
            ))
          }
        </div>
        {/* --- DEVELOPER ---------------- */}
        <div className="h-44 flex items-center md:perfect-center border-b border-neutral-border/40 px-2">
          <Badge text={game?.developer} type="accent" />
        </div>
        {/* --- GAME MODE ---------------- */}
        <div className="h-44 flex flex-col gap-1 items-start justify-center md:perfect-center border-b border-neutral-border/40 px-2">
          {
            game?.gameMode?.map((gameMode) => (
              <Badge key={gameMode} text={gameMode} type="accent" />
            ))
          }
        </div>
        {/* --- RELEASE YEAR ---------------- */}
        <div className="h-44 flex items-center md:perfect-center border-b border-neutral-border/40 px-2">
          <Badge text={game?.releaseYear} type="accent" />
        </div>
        {/* --- DESCRIPTION ---------------- */}
        <div className="min-h-44 flex items-center border-b border-neutral-border/40 px-2">
          <p className="line-clamp-6">{game?.description}</p>
        </div>
      </div>
    </>
  );
}
