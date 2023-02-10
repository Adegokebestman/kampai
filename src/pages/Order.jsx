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
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import Checkout from "../components/CheckOut";



const Order = () => {
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  return (
    <div className='btn-count mt-24 ml-2 md:mt-10'>
    <span className='border rounded-full border-white sidebar p-4 font-semibold text-black'> Cart items </span>
{/* <div className='mt-10 border rounded-2xl h-52 border-white sidebar p-4 '> */}

<div className='mt-10 flex flex-wrap lg:flex-nowrap justify-center'>
    <div className='flex justify-center items-center absolute'>
<div className='flex m-3 flex-wrap justify-center gap-8 items-center '>


<ul>
                  {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </ul>


{/*  */}


<div className=' flex justify-between'>
<Link to="../Inventory">
          <button
        class="py-2 px-10 mr-10 md:mr-20 text-xl md:text-2xl bg-[#FF7E20] text-[#ffffff] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Add Item</button>
      </Link>

<button onClick={() => setShowMyModal(true)}
        class="py-2 px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Check Out</button>



</div>

<MyModal onClose={handleOnClose} visible={showMyModal} />

</div>
</div>


</div>

</div>

  )
}

export default Order