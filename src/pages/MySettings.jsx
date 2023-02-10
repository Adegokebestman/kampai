import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';

function MySettings() {
  return (
    <div className='mt-24 md:mt-10'>
      {/* <!-- component --> */}
      <div class="mt-10 grid grid-rows-1 grid-flow-col gap-4 justify-center   items-center">

<div>

<button className='font-medium mr-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='/' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-2xl inline-block ml-2'>
   Personal Settings </p>
  </div>
</div>



{/* Buttons */}
      <div class="mt-10 grid grid-rows-6 grid-flow-col gap-4   items-center">

  <div className='justify-center flex'>

  <button className='font-medium pl-2 ml-2 mr-2 md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  text-[#AF501A] text-2xl border border-[#AF501A] rounded-lg p-4'>
  <Link to='../UserInfo'>
   Personal Infromation
   </Link></button> </div>

  <div className='justify-center flex'>

  <button className='font-medium pl-2 ml-2 mr-2 md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4 text-[#AF501A] text-2xl border border-[#AF501A] rounded-lg p-4'>
  <Link to=''>
   Chronology of Orders
   </Link></button>
    </div>
    <Link to='../PaymentMethod'>

  <div className='justify-center flex'>

  <button className='font-medium pl-2 ml-2 mr-2 md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  text-[#AF501A] text-2xl border border-[#AF501A] rounded-lg p-4'>
   Payment Method
   </button></div> </Link>
  <div className='justify-center flex'>

  <button className='font-medium pl-2 ml-2 mr-2 md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  text-[#AF501A] text-2xl border border-[#AF501A] rounded-lg p-4'>
  <Link to='../ShipAddress'>
   Shipping Address
   </Link></button> </div>
  <div className='justify-center flex'>

  <button className='font-medium pl-2 ml-2 mr-2 md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  text-[#AF501A] text-2xl border border-[#AF501A] rounded-lg p-4'>
  <Link to=''>
   Favourite Supplier
   </Link></button> </div>
  <div className='justify-center flex'>

  <button className='font-medium pl-2 ml-2 mr-2 md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  text-[#AF501A] text-2xl border border-[#AF501A] rounded-lg p-4'> Logout </button> </div>
</div>

    </div>
  )
}

export default MySettings