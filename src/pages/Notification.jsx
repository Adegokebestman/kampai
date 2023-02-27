import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import {BsChatLeftText, BsCheck2Circle} from 'react-icons/bs';

const Notification = () => {
  return (
    <div className='mt-24 md:mt-10'>
<div class=" grid grid-rows-1 grid-flow-col gap-4 justify-start ml-12 items-center">

<div>

<button className='font-medium mr-4 text-black text-xl md:text-2xl border border-white boxShadow rounded-lg p-2'>
<Link to='/' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
   Notifications </p>
  </div>
</div>

<div class="mt-10 flex flex-wrap lg:flex-nowrap justify-center">
<div class="bg-white boxShadow dark:text-gray-200 dark:bg-secondary-dark-bg h-22 rounded-xl w-80 lg:w-11/12 p-8 pt-9 m-3 ">
<div class="flex font-semibold justify-between items-center">
<BsChatLeftText className='text-[#FF7E20] text-4xl'/>
<div>

<h3 className="md:text-2xl text-xl inline-block  ml-8">check your messages</h3>

</div>
<div>

<Link to='../OrderTrack'>
<button className=" text-white bg-[#FF7E20] px-2 p-3 hover:drop-shadow-xl md:px-10">Read</button>
</Link>

</div>
</div>
</div>
</div>
</div>
  )
}

export default Notification;