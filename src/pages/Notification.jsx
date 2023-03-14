import React, {useEffect, useState} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import {BsChatLeftText, BsCheck2Circle} from 'react-icons/bs';
import axios from '../api/axios';
import NotificationItem from '../components/NotificationItem';

const READNOTIFICATION = '/notifications/readNotification ';
const GETNOTIFICATION = '/notifications/getNotifications';
const Notification = () => {

  const [notifications, setNotifications] = useState([]);

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    async function fetchNotifications() {
      const response = await axios.get(GETNOTIFICATION, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("noti:",response.data.allNotifications)
      setNotifications(response.data.allNotifications);
      console.log()
    }
    fetchNotifications();
  }, []);




  return (
    <div className='mt-24 md:mt-10'>
<div class=" grid grid-rows-1 grid-flow-col gap-4 justify-start ml-12 items-center">

<div>

<button className='font-medium mr-4 text-black text-xl md:text-2xl border border-white boxShadow rounded-lg p-2'>
<Link to='/' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
   Notifications </p>
  </div>
</div>

<div class="mt-10 flex flex-wrap lg:flex-nowrap justify-center">


<div>

        {notifications.map((item) => (
            <NotificationItem notification={item} key={item.id}/>
        ))}
      </div>

{/* <h3 className="md:text-2xl text-xl inline-block  ml-8">check your messages</h3> */}

</div>
<div>
</div>
</div>
  )
}

export default Notification;