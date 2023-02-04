import React, { useState } from 'react';
import { productList } from '../data/dummy';
import {BsPlusLg} from 'react-icons/bs';
import {FaMinus} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Button  } from '../components';
import "./Order.css";
import MyModal from './CheckOut';
import CartItem from "../components/CartItem";
import CartContext from '../contexts/Cart/CartContext';
import Checkout from "../components/CheckOut";



const Other = () => {
  const {cartItems,checout, clearCart } = useContext(CartContext);

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  return (
    <div className='btn-count mt-10'>
    <span className='border rounded-full border-white sidebar p-4 font-semibold text-black'> Cart items </span>
{/* <div className='mt-10 border rounded-2xl h-52 border-white sidebar p-4 '> */}

<div className='mt-10 flex flex-wrap lg:flex-nowrap justify-center'>
    <div className='flex  justify-center items-center absolute'>
<div className='flex m-3 flex-wrap justify-center gap-8 items-center '>


{productList.map((item) => (
  <ul className='flex container flex-row bg-white text-center sidebar  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl'>
  <li className='flex-item pr-8'>
  <img src={item.image} />

</li>
<li key = {item.id} className="mr-20 mt-8"> {item.id}</li>

<li className='p-8 font-medium mr-16'>{item.name}  <br/><span className='status'> Available {item.quantity} </span>
</li>

<li className='ml-8 mr-16 mt-8 font-medium'> {item.price} </li>

<button className='ml-8 mr-4 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#D0F4D0] text-[#147D30] '>
            <BsPlusLg/>
            </button>
            <span className='pt-9'>0</span>
            <button className='ml-4 mr-20 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#F9BFB5] text-[#EF3838]'>
             <FaMinus /> </button>





<button className='cartBtn text-2xl px-10'> Order  </button>
</ul>

))}
<div>
          <button
        class="py-2 px-10  mr-20 text-2xl bg-[#FF7E20] text-[#ffffff] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Add Item</button>


<button onClick={() => setShowMyModal(true)}
        class="py-2 px-10 bg-transparent text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Check Out</button>



</div>

<MyModal onClose={handleOnClose} visible={showMyModal} />

</div>
</div>


</div>

</div>

  )
}

export default Other;