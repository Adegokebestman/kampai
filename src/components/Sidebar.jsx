import React from 'react';
import { Link, link, NavLink } from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import kampai from '../data/kampai.svg';



const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <=900 ) {
      setActiveMenu(false);
    }
  }

  const activeLink = 'flex flex-col items-center gap-3 pr-8 pt-2 pb-2.5 rounded-lg text-[#FF7E20] text-lg m-2';

  const normalLink = 'flex flex-col items-center gap-3 pr-8 pt-2 pb-2.5 rounded-lg text-lg text-[#999897] dark:gray-200 dark:hover:text-blue-600 hover:text-[#FF7E20]';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto
    md:hover:overflow-auto pb-10'>
  {activeMenu && (<>
  <div className='flex justify-between items-center '>
  <Link to="/" onClick={ handleCloseSideBar } className="items-center
  gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight
  dark:text-white text-slate-900" >
    {/* LOGO */}
    <img src={kampai} alt={kampai} className=" md:hidden"/>
  </Link>
    <TooltipComponent content="Menu" position="BottomCenter">
    <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className="text-xl
      rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
{/* cancel icon */}
        <MdOutlineCancel />
      </button>
    </TooltipComponent>
  </div>
<div className='mt-20'>
  {links.map((item) => (
    <div key={item.title}>
    {/* remove this title of sidebar */}
    {/* <p className='text-gray-400 m-3 mt-4 uppercase'>
      {item.title}
    </p> */}
      {item.links.map((link) => (
        <NavLink to={`/${link.name}`} key={link.name}
        onClick={handleCloseSideBar} className={({ isActive }) =>
        isActive ? activeLink : normalLink}
        >
  <span className='text-2xl'>{link.icon} </span>
  <span className='capitalize'>
  {link.name}
  </span>
      </NavLink>
      ))}
    </div>
  ))}
</div>
  </>)}
    </div>
  )
}

export default Sidebar;