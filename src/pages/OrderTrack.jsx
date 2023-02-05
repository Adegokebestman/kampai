import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import {IoEyeSharp} from 'react-icons/io5';
import {BsCheck2Circle} from 'react-icons/bs';
import {FiPackage} from 'react-icons/fi';
import {BsTruck} from 'react-icons/bs';
import {BsClipboardCheck} from 'react-icons/bs';
import './OrderTrack.css';

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
<Link to='../MyOrder' >
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
   View Real time Tracker </p>
  </div>
  </Link>
</div>
{/* ORDER TRACK FROM CHATGPT */}
 {/* <div>
      <h2>Delivery Status: {deliveryStatus}</h2>
      {deliveryStatus === 'Pending' && (
        <button onClick={handleClick}>Start Delivery</button>
      )}
    </div> */}
    {/* ENDS HERE */}

{/* Shppiment info */}
<div class="main mt-10 ml-12 sidebar bg-white size w-11/12 ">



    <div class="timeline ">



      <div class="box">

        <div class="container">

          <div class="lines">
            <div class="dot2"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
          </div>

          <div class="cards font-semibold">
            <div class=" flex card border-2 border-[#FF7E20]">

              <div className=' border bg-[#FF7E20]  w-14 h-14 p-2  -ml-8 -mt-6  text-white rounded-full'>
                <BsCheck2Circle className='text-4xl'/>
              </div>
              <p className='flex items-center pb-4 text-[#FF7E20] justify-center'>Shipment Confirmed</p>
            </div>

            <div class="card mid  flex  border-2 border-[#999897]">
            <div className=' border bg-[#D9D9D9]  w-14 h-14 p-2  -ml-8 -mt-6  text-[#5B5856] rounded-full'>
                <FiPackage className='text-4xl'/>
              </div>
              <p className='flex items-center pb-4 text-[#999897] justify-center'>Shipment has been packaged</p>
            </div>

            <div class=" flex card border-2 border-[#999897]">
            <div className=' border bg-[#D9D9D9]  w-14 h-14 p-2  -ml-8 -mt-6  text-[#5B5856] rounded-full'>
                <BsTruck className='text-4xl'/>
              </div>
              <p className='flex items-center pb-4 text-[#999897] justify-center'>Shipment departed to destination</p>
            </div>

            <div class=" flex card border-2 border-[#999897] mid">
            <div className=' border bg-[#D9D9D9]  w-14 h-14 p-2  -ml-8 -mt-6  text-[#5B5856] rounded-full'>
                <BsClipboardCheck className='text-4xl'/>
              </div>
              <p className='flex items-center pb-4 text-[#999897] justify-center'>Shipment Arrived</p>
            </div>
          </div>
    {/* Aside arrive dates and time */}

          <div className='grid grid-rows-4 items-center ml-24  grid-flow-col rap '>
    <div className='  border rounded-xl  eta text-white'>
      <h3 className=' text-lg font-medium w-2/4 aside '>Expected Time ODF <br/> Arrival/ & Address</h3>
    </div>

    <div className='justify-center  border rounded-xl  eta text-white'>
      <h3 className=' text-lg font-medium w-2/4 aside '>2/02/23 <br/> 12pm - 4pm</h3>
    </div>

    <div className='justify-center  border rounded-xl  eta text-white'>
      <h3 className=' text-lg font-medium w-2/4 aside '>14 Calmino da Viento  <br/> 28004 Madrid Espana </h3>
    </div>


    </div>


        </div>




        {/* <div class="bottom">

          <div class="btn">Show all updates</div>

        </div> */}
      </div>
      </div>

    </div>
    {/* <div className=' justify-end grid grid-rows-4 px-8 grid-flow-col gap-4 '>
    <div className='flex border rounded-xl px-8 py-2 eta text-white'>
      <p>Expected Time ODF <br/> Arrival/ & Address</p>
    </div>
    <div className='flex border rounded-xl px-8 py-2 eta text-white'>
      <p>Expected Time ODF <br/> Arrival/ & Address</p>
    </div>
    <div className='flex border rounded-xl px-8 py-2 eta text-white'>
      <p>Expected Time ODF <br/> Arrival/ & Address</p>
    </div>

    </div> */}
</div>
  )
}

export default OrderTrack