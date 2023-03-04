import React from 'react';
import ChatNavBar from './ChatNavBar';
import ChatSearchBar from './ChatSearchBar';
import Chats from './Chats';

const ChatSidebar = () => {
  return (
    <div className='sideBar '>
      <ChatNavBar />
      <ChatSearchBar />
      <Chats />
    </div>
  )
}

export default ChatSidebar