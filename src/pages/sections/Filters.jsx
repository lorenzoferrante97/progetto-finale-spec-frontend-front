
import RadioButton from "../../components/RadioButton";

export default function Filters( { items } ) {

  return (
    <>
      <div className="overflow-x-auto w-full min-h-12">
        <div className="flex items-center gap-1 px-2 py-1 w-max">
          {/* --- CATEGORIES ---------------- */}
          {
            items?.map((item, i) => <RadioButton key={i} item={item} />)
          }
        </div>

      </div>
    </>
  );
}
