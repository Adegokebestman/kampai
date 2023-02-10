import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import {BiPencil} from 'react-icons/bi';
import {BsCamera} from 'react-icons/bs';
import './UserInfo.css';


const UserInfo = () => {
  return (
    <div>

       <div class="mt-20 md:mt-10 grid grid-rows-1 grid-flow-col gap-4 justify-center   items-center">

<div>

<button className='mr-4 text-black text-xl md:text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../MySettings' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
   Personal Information </p>
  </div>
</div>

<div className=" mt-10 grid grid-rows-2 grid-flow-col justify-center  items-center ">
<div>
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
  <div className=' border bg-white  w-10 h-10 p-2 ml-40 camera -mt-10  text-black rounded-full'>
                <BsCamera className='text-2xl'/>
              </div>
 {/* <div className='w-14 h-14 bg-[#FF7E20] relative rounded-full'>
  <BsCamera className='text-2xl ml-24 camera'/>
  </div> */}
  </div>

  <div>
 <p className='font-semibold text-2xl inline-block ml-2'>
 Clutterhill Bar  </p>
   <button className='font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='/' >
<BiPencil/>
</Link>
 </button>
 <div>
 <p className='font-medium text-lg inline-block ml-2'>
 +44 843456778980  </p>
   <button className='font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='/' >
<BiPencil/>
</Link>
 </button>

  </div>
  </div>



</div>

<div className='w-11/12 md:w-9/12  px-3 mb-2 mt-2 md:ml-20'>
<h2 className=" text-xl font-semibold sm:text-2xl">Bar description</h2>
<textarea placeholder='Enter a discription' className='mt-4 bg-white rounded-2xl sidebar border border-white leading-normal resize-none w-full msg py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"'></textarea>
</div>
    </div>
  )
}

export default UserInfo