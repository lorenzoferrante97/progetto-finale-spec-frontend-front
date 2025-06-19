import { memo } from "react";

export default memo(function Card({ game }) {


  const {title, category} = game;

  return (
    <>
      <div className="col-span-full md:col-span-2 lg:col-span-4 bg-neutral-base-300 p-2 rounded-lg">

        {/* image */}

        <div className="flex flex-col gap-2">
        <span>{title}</span>
        <span>{category}</span>
        </div>

      </div>
    </>
  );
});
