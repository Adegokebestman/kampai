import React, {useEffect, useState} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import {BsChatLeftText, BsCheck2Circle} from 'react-icons/bs';
import axios from '../api/axios';

const READNOTIFICATION = '/notifications/readNotification ';
const GETNOTIFICATION = '/notifications/getNotifications';

const NotificationItem = ({notification}) => {

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

  const handleNotificationClick = async () => {
    const token = localStorage.getItem('accessToken');
    // Send POST request to mark notification as read
    // console.log(notifications)
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
  };


  return (
    <li onClick={() => handleNotificationClick(notification.id)}>
            {notification.notification} {notification.status == 'read' ? '(read)' : 'unread'}
          </li>
  )
}

export default NotificationItem;