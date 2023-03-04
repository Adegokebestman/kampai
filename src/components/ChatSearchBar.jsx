import React from 'react'

const ChatSearchBar = () => {
  return (
    <div className='Chatsearch'>
    <div className='SearchForm'>
    <input className='searchInput' placeholder='find a user' type='text' />
    </div>
    <div className='userChat'>
    <img className='userimg' src='https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
    <div className='userChatInfo'>
        <span>Jane</span>
    </div>
    </div>
    </div>
  )
}

export default ChatSearchBar