import { useGlobalContext } from "../contexts/globalContext";

export default function RadioButton({ item }) {

  const { handleCategoryChange } = useGlobalContext();

  return (
    <>
      <label htmlFor={item} className="transition-base lg:hover:cursor-pointer lg:hover:bg-accent-solid lg:hover:text-white perfect-center px-2 py-1 rounded-md bg-neutral-base-300 min-h-12">
        <input value={item} type="radio" name="categories" id={item} className="hidden" onChange={handleCategoryChange} />
        <span>{item}</span>
      </label>
    </>
  );
}
