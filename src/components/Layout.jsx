import React from 'react';
import { Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';


const Layout = () => {
    const { activeMenu } = useStateContext();
    return (
      <>


      <Sidebar />




      <Navbar />
    <Outlet />
      </>
      )
    }

export default Layout