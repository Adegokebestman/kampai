import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import {FaEdit} from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs'
import {BiCurrentLocation} from 'react-icons/bi';
import { useStateContext } from '../contexts/ContextProvider';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { Button } from '../components';
import { useEffect, useState } from 'react';

import axios from '../api/axios';
const PENDING_ORDERS = '/orders/getPendingOrders';
const UNREAD_MESSAGES = '/messages/getUnreadMessages';
const MODIFIED_ORDERS = '/orders/getModifiedOrders';
const USER_INFO = '/users/getUserInfo';
const READ_NOTIFICATION = '/notifications/readNotification'

const Dashboard = () => {
  const [pendingOrders, setPendingOrders] = useState("");
  const [unReadMessages, setUnReadMessages] = useState("");
  const [modifiedOrders, setModifiedOrders] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [readNotification, setReadNotification] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios.get(PENDING_ORDERS, {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log(response)
      setPendingOrders(response.data.pendingOrders);
    });
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios.get(UNREAD_MESSAGES, {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log(response)
      setUnReadMessages(response.data.unreadmessages);
    });
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios.get(MODIFIED_ORDERS, {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log(response)
      setModifiedOrders(response.data.modifiedOrders);
    });
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios.get(USER_INFO, {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log('UserInfo:',response)
      setUserInfo(response.data.userInfo.lastName);
    });
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios.post(READ_NOTIFICATION, {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then((response) => {
      console.log('READ:',response)
      readNotification(response.data);
    });
  }, []);

  return (
    <div className='mt-20 md:12'>
    <div className='flex flex-wrap lg:flex-nowrap justify-center'>
    <div className='bg-white boxShadow hero dark:text-gray-200 dark:bg-secondary-dark-bg h-22 rounded-xl w-80 lg:w-11/12 p-8 pt-9 m-3 '>

<div className='flex font-semibold justify-between items-center'>
<p className='font-bold text-xl md:text-2xl'> Welcome, {userInfo}</p>

<div>
<Link to="/Inventory">
<Button color="white" bgColor="#FF7E20" text="CHECK YOUR INVENTORY" borderRadius="10px"  />
</Link>

</div>
</div>
{/* button */}
  {/* <div className='mt-6'>
<Button color="white" bgColor="#FF7E20" text="Download" borderRadius="10px" />
  </div> */}
    </div>


</div>
<div className='flex m-3 flex-wrap dashboard justify-center gap-4 items-center md:gap-20'>

 <div className="bg-white text-center dashboard-content boxShadow dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72 h-40  p-4 pt-2 rounded-2xl md:pt-20 md:h-72">
    <button type='button' style={{color:'#34A853', backgroundColor: '#EDFBED'}} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
    <BsBoxSeam/>
    </button>
    <p className='mt-3'>
      <span className='text-2xl font-semibold'>
      {pendingOrders}
      </span>

    </p>
    <span className={`text-sm`}>
      Pending Orders
      </span>
     </div>

     <div className="bg-white text-center dashboard-content boxShadow dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72 h-40  p-4 pt-2 rounded-2xl md:pt-20 md:h-72">
    <button type='button' style={{color:'#9747FF', backgroundColor: '#E8DAFB'}} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
    <FiMail />
    </button>
    <p className='mt-3'>
      <span className='text-2xl font-semibold'>
       {unReadMessages}
      </span>

    </p>
    <span className={`text-sm`}>
      Unread Messages
      </span>
     </div>

     <div className="bg-white text-center dashboard-content boxShadow dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72 h-40  p-4 pt-2 rounded-2xl md:pt-20 md:h-72">
    <button type='button' style={{color:'#EF3838', backgroundColor: '#FDE6E6'}} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
    <FaEdit />
    </button>
    <p className='mt-3'>
      <span className='text-2xl font-semibold'>
      {modifiedOrders}
      </span>

    </p>
    <span className={`text-sm`}>
      Modified Orders
      </span>
     </div>

    </div>
    <div className='flex justify-end float-right font-semibold rounded-full mt-8 mr-16 pr-10 bg-white boxShadow items-center'>

    <BiCurrentLocation className='text-4xl m-8 text-[#FF7E20]' />

<div>
<Link to="../Myorder">

<Button className="m-12 text-xl " color="white" bgColor="#FF7E20" text=" Track Order" borderRadius="10px" />
</Link>

</div>

</div>
    </div>
  )
}

export default Dashboard