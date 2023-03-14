import React, {useState, useEffect} from 'react';
import {BsChatLeftText, BsCheck2Circle} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import axios from '../api/axios';

const NotificationItem = ({notification}) => {
  const READNOTIFICATION = '/notifications/readNotification ';

  const handleNotificationClick = async (notifications) => {
    if ( notification.id) {
      console.log(notification.id)
      const token = localStorage.getItem('accessToken');
    // Send POST request to mark notification as read
    console.log(notifications)
    try {
      const response = await axios.post(READNOTIFICATION, { notificationId: notification.id},
         {
          headers: {
          Authorization: `Bearer ${token}`,
        }
      },
        );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    }

  };

  return (

    <div className="mt-10 flex flex-wrap lg:flex-nowrap justify-center">
<div className="bg-white boxShadow dark:text-gray-200 dark:bg-secondary-dark-bg h-22 rounded-xl w-80 lg:w-11/12 p-8 pt-9 m-3 ">
<div className="flex font-semibold justify-between items-center ">
<BsChatLeftText className='text-[#FF7E20] text-2xl'/>
<div>

<div  className={` pl-4 pr-4 ${notification.status == 'unread' ? 'text-red-700' :
    'text-blue-700'  }`}  >{notification.notification}

  </div>
{/* <h3 className="md:text-2xl text-xl inline-block  ml-8">check your messages</h3> */}

</div>
<div>

<button onClick={handleNotificationClick} className=" text-white bg-[#FF7E20] px-2 p-3 rounded-lg hover:drop-shadow-xl md:px-10">GO</button>


</div>
</div>
</div>
</div>


  )
}

export default NotificationItem