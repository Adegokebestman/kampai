import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb';
import {IoIosArrowBack} from 'react-icons/io';
const Myorder = () => {
  return (
<div className='mt-10'>
<button className=" flex flex-wrap lg:flex-nowrap justify-start  pb-2 mb-8 ml-12 sidebar  pt-2 rounded-lg border border-white p-4 bg-white">
  <IoIosArrowBack className='text-2xl '/> <p className='font-semibold'>  Order Tracking </p>

</button>

<div class="flex flex-wrap lg:flex-nowrap justify-center">
<div class="bg-white sidebar dark:text-gray-200 dark:bg-secondary-dark-bg h-22 rounded-xl w-80 lg:w-11/12 p-8 pt-9 m-3 ">
<div class="flex font-semibold justify-between items-center">
<TbTruckDelivery className='text-[#FF7E20] text-4xl'/>
<div>

<span className=" text-[#EF3838] bg-[#FFF1E8] rounded-full p-3 hover:drop-shadow-xl">Pending</span>

</div>
<div>

<button className=" text-white bg-[#FF7E20] px-10 p-3 hover:drop-shadow-xl">Track Order</button>

</div>
</div>
</div>
</div>
</div>


  )
}

export default Myorder