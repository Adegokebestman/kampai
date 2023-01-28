import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Dashboard, Order, Calender, Cusomers, CheckOut, Message, Inventory, Myorder } from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
    <div className="flex relative dark:bg-main-dark-bg">
    {/* <div className="fixed right-4 bottom-4" style={{ zindex: '1000'}}>
    <TooltipComponent content="Settings" position='Top' >

    <button type="button" className="text-3xl p-3 hover:drop-shadow-xl
    hover:bg-light-gray text-white" style={{ background:'blue',
    borderRadius:'50%' }}>

      <FiSettings />
    </button>

    </TooltipComponent>

    </div> */}

{/* If the Menu/ Sidebar is active or not */}
{activeMenu ? (
  <div className='w-52 fixed sidebar '>
  <Sidebar />
  </div>
) : (
  <div className='w-0 dark:bg-secondary-dark-bg'>
  <Sidebar /> w-0 </div>
)}

{/* navigation bar */}
  <div className={
    `dark:bg-main-bg bg-main-bg min-h-screen w-full
    ${activeMenu ? 'md:ml-72' : 'flex-2'}`
    }>

    <div className="fixed md:static bg-main-bg dark:bg-main-bg
    navbar w-full">
  <Navbar />
   </div>


  {/* for routing */}
    <div>
    <Routes>
    {/* Dashboard */}
    <Route path="/" element={<Dashboard />} />
    <Route path="/dashboard" element={<Dashboard />} />

    {/* Pages */}
    <Route path="/message" element={<Message />} />
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/order" element={<Order />} />
    <Route path="/myorder" element={<Myorder />} />
</Routes>
    </div>
    </div>
     </div>
      </BrowserRouter>
    </div>
  )
}

export default App