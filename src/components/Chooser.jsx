import { PlusIcon } from "@phosphor-icons/react";

export default function Chooser() {
  return (
    <>
      <div className="perfect-center rounded-full aspect-square w-20 md:w-36 lg:w-52 h-fit bg-neutral-base-300/40 lg:hover:bg-neutral-base-300">
        <PlusIcon size={32} weight="bold" className="text-neutral-text-low" />
      </div>
    </>
  );
}
