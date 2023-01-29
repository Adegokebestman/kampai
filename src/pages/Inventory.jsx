import React from 'react';
import { productList } from '../data/dummy';
import {BsPlusLg} from 'react-icons/bs';
import {FaMinus} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Button  } from '../components';
import "./Order.css";

const Order = () => {
  return (
    <div className='btn-count mt-10'>
    <span className='border rounded-full border-white sidebar p-4 font-semibold text-black'> All items </span>
{/* <div className='mt-10 border rounded-2xl h-52 border-white sidebar p-4 '> */}

<div className='mt-10 flex flex-wrap lg:flex-nowrap justify-center'>
    <div className='flex  justify-center items-center absolute'>
<div className='flex m-3 flex-wrap justify-center gap-8 items-center '>


{productList.map((item) => (
  <ul className='flex container flex-row bg-white text-center sidebar  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl'>
  <li className='flex-item pr-4'>
  <img src={item.image} />

</li>
<li key = {item.id} className="mr-8 mt-8"> {item.id}</li>

<li className='p-8 font-medium'>{item.name}  <br/><span className='status'> Available {item.quantity} </span>
</li>

<li className='ml-8 mr-12 mt-8 font-medium'> {item.price} </li>
<span className='border rounded-full border-white bg-[#D0F4D0] text-[#147D30] mt-8 mr-10 pt-2 pb-8 pr-4 pl-4 mb-8 '> {item.status} </span>

<button className='ml-8 mr-4 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#D0F4D0] text-[#147D30] '>
            <BsPlusLg/>
            </button>
            <span className='pt-9'>0</span>
            <button className='ml-4 mr-20 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#F9BFB5] text-[#EF3838]'>
             <FaMinus /> </button>

						<button class="mr-4 text-[#FF7E20] text-2xl">
            <AiOutlineShoppingCart />
            </button>



<button className='cartBtn text-xl'> Add to Cart </button>

</ul>

))}
</div>
</div>


</div>

</div>

  )
}

export default Order