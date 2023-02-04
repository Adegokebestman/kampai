import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import {IoEyeSharp} from 'react-icons/io5';

const OrderTrack = () => {

  const [deliveryStatus, setDeliveryStatus] = useState('Pending');

    const handleClick = () => {
      setDeliveryStatus('In Transit');
    };


  return (
    <div className='mt-10'>
<div class=" grid grid-rows-1 grid-flow-col gap-4 justify-between ml-12 items-center">

<div>

<button className='font-medium mr-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='/' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-2xl inline-block ml-2'>
   Order Tracking </p>

  </div>
  <Link to='' >
  <div style={{background: 'linear-gradient(180deg, #147D30 0%, #11CA42 100%)'}} className=' sidebar border border-white mr-8 p-2 rounded-lg'>
  <button className='font-medium mr-4 text-black text-2xl'>

<IoEyeSharp className='text-white'/>

 </button>
 <p className='font-semibold text-2xl text-white inline-block'>
   Order Tracking </p>
  </div>
  </Link>
</div>
 <div>
      <h2>Delivery Status: {deliveryStatus}</h2>
      {deliveryStatus === 'Pending' && (
        <button onClick={handleClick}>Start Delivery</button>
      )}
    </div>
    </div>
  )
}

export default OrderTrack