import { Outlet } from 'react-router-dom';
import Header from '../pages/sections/Header';

export default function DefaultLayout() {
  return (
    <>
    <Header />
    <div className='p-section font-body-base-regular text-neutral-text-high container-full overflow-x-hidden overflow-y-visible pt-12'>
      {/* MAIN ---------------------------- */}
      <main data-id='main' className='container-responsive'>
        <Outlet />
      </main>
    </div>
    </>
  );
}
