import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';

const ShipAddress = () => {
  return (
    <div>
          <div class="md:mt-10 mt-24 grid grid-rows-1 grid-flow-col gap-4 justify-center   items-center">

<div>

<button className='font-medium mr-4 text-black text-xl md:text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../MySettings' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
   Shipping Address  </p>
  </div>
</div>

<div class="mt-10 grid grid-rows-6 grid-flow-col gap-4   items-center">

<div className='justify-center flex'>

<input placeholder='Fullname' className='w-3/4 md:pl-10 md:ml-40 md:mr-40 md:w-2/4  text-[#AF501A]  border border-[#AF501A] rounded-lg p-4'>
</input>

</div>

<div className='justify-center flex'>

<input placeholder='Street, Street Number '  className='w-3/4 md:pl-10 md:ml-40 md:mr-40 md:w-2/4  text-[#AF501A]  border border-[#AF501A] rounded-lg p-4'>
</input>

</div>

<div className='justify-center flex'>

<input placeholder='City Postal Code Country' className='w-3/4 md:pl-10 md:ml-40 md:mr-40 md:w-2/4  text-[#AF501A]  border border-[#AF501A] rounded-lg p-4'>
</input>

</div>

<div className='flex justify-center'>
<button
        class="py-2 px-10 bg-transparent text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Save</button>
      </div>
</div>





    </div>
  )
}

export default ShipAddress