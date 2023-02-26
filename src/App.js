import React, {useEffect} from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import RequiredAuth from './components/RequireAuth';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Dashboard, Order, ShipAddress, PaymentMethod, CheckOut, Message, Inventory, Myorder, MySettings, OrderTrack, UserInfo, Login, Notification, Roles, SignUp,Otp } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const Layout = () => {
  const { activeMenu } = useStateContext();
return (
  <>
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

  <Navbar />
<Outlet />
</div>
    </div>
  </>
  )
}

const App = () => {

  return (
    <div>

      <Routes>

  {/* for routing */}
    <>
    <Route>

    {/* Dashboard */}
<Route element= {<Layout/>}>
<Route element={<RequiredAuth />}>
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
    <Route path="/userinfo" element={<UserInfo />} />
    <Route path="/notification" element={<Notification />} />

</Route>
</Route>
    <Route path="/" element={<Roles />} />
    <Route path="/login" element={<Login />} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/otp' element={<Otp/>} />

</Route>

     </>

      </Routes>
    </div>
  )
}

export default App