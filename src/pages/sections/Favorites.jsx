import { XIcon } from "@phosphor-icons/react"; 
import { useGlobalContext } from "../../contexts/globalContext";
import { useEffect } from "react";
import Card from "../../components/Card";

export default function Favorites({ show, setShow }) {

  const { getFromStorage, favorites, removeFromStorage } = useGlobalContext();

  useEffect(() => {
    show && getFromStorage("preferiti");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, favorites]);

  return (
    <>
      <div className={show ? "h-screen text-neutral-text-high w-full lg:w-[40%] fixed right-0 top-0 bg-neutral-base-200/80 backdrop-blur-sm z-[100]" : "hidden"}>
        <div className="container-responsive p-section mt-10 flex flex-col gap-8">
          {/* HEADER ---------------------------- */}
          <div className="flex items-center justify-between">
            <span className="font-h2">Preferiti</span>
            <button onClick={() => setShow(false)} className="lg:hover:cursor-pointer perfect-center transition-base aspect-square w-10 rounded-full bg-error-bg text-error-text"><XIcon size={20} weight="bold" /></button>
          </div>
          {/* MAIN ---------------------------- */}
          <div className="row-grid bg-neutral-base-300/50 px-4 py-8 rounded-lg gap-4 scroll-auto overflow-y-auto h-[72vh]">
            {
              favorites?.length > 0 ?
              favorites?.map((favorite) => {
              return (
                <div key={favorite.id} className="col-span-2 lg:col-span-full flex flex-col lg:flex-row gap-2">
                  <Card game={favorite} type="favorites" />
                  <div className="min-w-[60%] w-full">
                  <button className="lg:hover:cursor-pointer transition-base font-body-base-bold min-h-12 lg:hover:bg-accent-solid lg:hover:border-accent-solid lg:hover:text-white lg:w-fit border-2 border-accent-border-strong text-accent-text-high px-4 py-2 rounded-md w-full lg:w-fit" onClick={() => removeFromStorage("preferiti", favorite)}>Rimuovi</button>
                  </div>
                </div>
            )
            } )
              :
              <p className="col-span-full">Non hai aggiunto preferiti alla lista.</p>
            }
          </div>
        </div>
      </div>
    </>
  );
}
