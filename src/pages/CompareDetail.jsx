
import Chooser from "../components/Chooser";

export default function CompareDetail() {
  return (
    <>
      <div className="row-grid w-full gap-y-10">
        {/* --- HEADER ------------------------------------------------------------- */}
        <div className="col-span-full md:col-start-2 md:col-span-6 lg:col-start-3 lg:col-span-8">
          <h1 className="font-h1 lg:text-center">Confronta due Videogiochi e scopri quello che fa per te</h1>
        </div>

        {/* --- MAIN -------------------------------------------------------------- */}
        <div className="col-span-full row-grid bg-neutral-base-200 rounded-lg p-4 min-h-[60vh]">
          {/* --- FIRST SELECTOR ---------------- */}
          <div className="col-span-2 perfect-center md:col-span-4 lg:col-span-6">
            <Chooser />
          </div>

          {/* --- SECOND SELECTOR ---------------- */}
          <div className="col-span-2 perfect-center md:col-span-4 lg:col-span-6">
            <Chooser />
          </div>

        </div>


      </div>
    </>
  );
}
