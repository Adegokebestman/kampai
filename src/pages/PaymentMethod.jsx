import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CheckOut } from '.';

const PaymentMethod = () => {
  return (
    <div>
          <div class="md:mt-10 mt-20 grid grid-rows-1 grid-flow-col gap-4 justify-center   items-center">

<div>

<button className='font-medium mr-4 text-black text-xl md:text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../MySettings' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
   Payment Method </p>
  </div>
</div>
 <div class="mt-10 grid grid-rows-6 grid-flow-col gap-4   items-center">

<div className='justify-center flex'>

<input placeholder='Fullname' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>

</div>

<div className='justify-center flex'>

<input placeholder='Company Name'  className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>

</div>

<div className='justify-center flex'>

<input placeholder='Billing Address' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>

</div>

<div className='justify-center flex'>

<input placeholder='Card Number' type="number" className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4 focus:border-[#FF7E20] outline-none  border border-[#AF501A] rounded-lg p-4'>
</input>

</div>
<div className='flex justify-center -mx-3'>
<div class=" px-3 mb-5">
              <div class="flex">
                   <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                   <input type="text" class="ml-8 pl-10 w-full md:-ml-10 md:pl-10 md:pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FF7E20] " placeholder="CVV" />
               </div>
               </div>

               <div class=" md:px-3 mb-5">

              <div class="flex">
                   <div class="w-40 z-40 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                   <input type="text" class="w-full md:mr-2 mr-14 pl-4 md:-ml-10 md:pl-10 md:pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FF7E20] " placeholder="Expire Date" />
               </div>
               </div>

</div>

<div className='justify-center flex'>

<select class="form-select text-gray-600 dark:text-gray-400 focus:outline-none  h-10 focus:ring-offset-2  mb-8  dark:border-[#FF7E20]  dark:bg-[#FF7E20]  bg-white font-normal w-2/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow">
                <option className='text-gray-400'>Select Payment Method</option>
                <option>VISA</option>
                <option>APPLE PAY</option>
                <option>MASTERCARD</option>
              </select>
</div>



 </div>
 <div className='flex justify-center mb-10'>
 <button
        class="py-2 px-10 bg-transparent text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Save</button>
      </div>
    </div>
  )
}

export default PaymentMethod;