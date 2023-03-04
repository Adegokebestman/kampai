import React from 'react';
import {MdOutlineKeyboardVoice} from 'react-icons/md';
import {GrAttachment} from 'react-icons/gr';

const ChatInput = () => {
  return (
    <div className='ChatInput'>
    <input type="text" placeholder='Type something.....' />
    {/* send */}
    <div className='send'>
<MdOutlineKeyboardVoice className='h-10 cursor-pointer' />
<input type='file' style={{display:"none"}} id="file" />
<label htmlFor='file'>
<GrAttachment  className='h-10 cursor-pointer'/>
</label>
<button className='chatSend'>Send</button>
    </div>
    </div>
  )
}

export default ChatInput