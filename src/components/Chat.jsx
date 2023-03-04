import React from 'react';
import {IoCallOutline} from 'react-icons/io5';
import {BsCameraVideo} from 'react-icons/bs';
import Messages from './Messages';
import ChatInput from './ChatInput';

const Chat = () => {
  return (
    <div className='chat'>
    {/* chat info */}
  <div className=' chatInfo h-12 bg-[##FF7E20] text-black font-bold flex items-center justify-between p-6'>
    <span>Guy Madison</span>
    {/* chat icons */}
    <div className='flex text-[#999897] gap-2 h-6 cursor-pointer'>
<IoCallOutline />
<BsCameraVideo />
    </div>

  </div>
  <Messages />
    <ChatInput className='h-12 p-2 bg-white focus:outline-none'/>


    </div>
  )
}

export default Chat