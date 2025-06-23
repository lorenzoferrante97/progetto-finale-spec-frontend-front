export default function RadioButton({ item }) {
  return (
    <>
      <label htmlFor={item} className="transition-base lg:hover:cursor-pointer lg:hover:bg-accent-solid lg:hover:text-white perfect-center px-2 py-1 rounded-md bg-neutral-base-300 min-h-12">
        <input type="radio" name="categories" id={item} className="hidden" />
        <span>{item}</span>
      </label>
    </>
  );
}
