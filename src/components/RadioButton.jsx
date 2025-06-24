import { useGlobalContext } from "../contexts/globalContext";

export default function RadioButton({ item }) {

  const { handleCategoryChange, category } = useGlobalContext();

  return (
    <>
      <label htmlFor={item} className={`${category === item ? "bg-accent-solid text-white" : "bg-neutral-base-300 text-neutral-text-high"} transition-base lg:hover:cursor-pointer lg:hover:bg-accent-solid lg:hover:text-white perfect-center px-2 py-1 rounded-md min-h-12`}>
        <input value={item} type="radio" name="categories" id={item} className="hidden" onChange={handleCategoryChange} />
        <span>{item}</span>
      </label>
    </>
  );
}
