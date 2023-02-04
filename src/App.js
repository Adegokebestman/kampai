import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Dashboard, Order, ShipAddress, PaymentMethod, CheckOut, Message, Inventory, Myorder, MySettings, OrderTrack } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>

      <BrowserRouter>

    <div className="flex relative dark:bg-main-dark-bg">

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
    <Route path="/mysettings" element={<MySettings />} />
    <Route path="/paymentmethod" element={<PaymentMethod />} />
    <Route path="/shipaddress" element={<ShipAddress />} />
    <Route path="/ordertrack" element={<OrderTrack />} />


</Routes>
    </div>
    </div>
     </div>

      </BrowserRouter>
    </div>
  )
}

export default App