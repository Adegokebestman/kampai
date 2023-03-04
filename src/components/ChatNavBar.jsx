import React, { useContext } from 'react';

const ChatNavBar = () => {
  return (
    <div className='chatNavbar'>
      <span className='chatlogo'>kanpai</span>
      <div className='user justify-between flex'>
        <img className='logoimg' src='https://images.pexels.com/photos/6652959/pexels-photo-6652959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <span className='pl-2'> John</span>
        {/* <button className='chatbtn'>logout</button> */}
      </div>
    </div>
  )
}

export default ChatNavBar