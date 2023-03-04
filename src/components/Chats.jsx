import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
<div className='userChat'>
    <img className='userimg' src='https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    <div className='userChatInfo'>
        <span>Jane</span>
        <p>Hello</p>
    </div>
    </div>

    <div className='userChat'>
    <img className='userimg' src='https://images.pexels.com/photos/7710127/pexels-photo-7710127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    <div className='userChatInfo'>
        <span>Mercy</span>
        <p>The parcel is available </p>
    </div>
    </div>

    <div className='userChat'>
    <img className='userimg' src='https://images.pexels.com/photos/5357589/pexels-photo-5357589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    <div className='userChatInfo'>
        <span>Olivia</span>
        <p>product is available</p>
    </div>
    </div>
    </div>
  )
}

export default Chats