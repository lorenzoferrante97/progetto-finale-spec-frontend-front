
import RadioButton from "../../components/RadioButton"
import { XIcon } from "@phosphor-icons/react";
import { useGlobalContext } from "../../contexts/globalContext";

export default function Filters( { items } ) {

  const { category, handleResetCategory } = useGlobalContext();

  return (
    <>
      <div className="overflow-x-auto w-full min-h-12 snap-x scroll-smooth py-2">
        <div className="flex items-center gap-1 px-2 py-1 w-max">
          {/* --- RESET ---------------- */}
          {
            category?.length > 0 && <button className="min-h-12 perfect-center aspect-square p-1 bg-accent-soft rounded-md" onClick={handleResetCategory}><XIcon size={20} weight="bold" className="text-accent-text-low" /></button>
          }
          {/* --- CATEGORIES ---------------- */}
          {
            items?.map((item, i) => <RadioButton key={i} item={item} />)
          }
        </div>

      </div>
    </>
  );
}
