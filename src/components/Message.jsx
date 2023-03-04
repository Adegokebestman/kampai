import React from 'react'

const Message = () => {
  return (
    <div className='boxMessage owner'>
      <div className='messageInfo'>
        <img src='https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
    <p>Hello</p>
    <img src='https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      </div>
    </div>
  )
}

export default Message