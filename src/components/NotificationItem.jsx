import React, {useState, useEffect} from 'react';
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

    <div onClick={handleNotificationClick} className={`mb-10 ${notification.status == 'unread' ? 'text-red-700' :
    'text-blue-700'  }`}  >{notification.subject}

  </div>
  )
}

export default NotificationItem