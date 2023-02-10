
import React, { useContext } from 'react';
import CartContext from '../contexts/Cart/CartContext';
import {BsPlusLg} from 'react-icons/bs';
import {BsTrash} from 'react-icons/bs';
import {FaMinus} from 'react-icons/fa';

const CartItem = ({ product }) => {
const { removeFromCart, increase, decrease } = useContext(CartContext);

  return (
<ul className='flex container flex-row mb-8 bg-white text-center sidebar  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl'>
  <li className='flex-item md:pr-8'>
  <img src={product.image} />

</li>
{/* <li key = {product.id} className="mr-4 mt-4 md:mr-20 md:mt-8"> {product.id}</li> */}

<li className='mr-2 p-2 text-sm font-medium md:p-8 md:font-medium md:mr-16'>{product.name}

<br/><span className='status'> Available {product.quantity} </span>
</li>

<li className='ml-2 mr-1 mt-8 md:ml-8 md:mr-16 md:mt-8 font-medium'> {product.price} </li>

{/* Buttons */}
{/* increase Product */}
<button onClick={() => increase(product)} className=' md:ml-8 md:mr-4 ml-2 mr-2 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#D0F4D0] text-[#147D30] '>
            <BsPlusLg/>
            </button>

            <span className='pt-9'>{product.quantity}</span>

            {/* decrease product */}
{product.quantity > 0 && (
<button onClick={()=> decrease(product)} className=' mr-2 ml-2 md:mr-20 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#F9BFB5] text-[#EF3838]'>
             <FaMinus /> </button>
             )}

{/* remove product */}
{product.quantity === 1 && (
    <button onClick={() => removeFromCart(product)}>
    <BsTrash className=' mr-2 text-[#FF7E20]'/>
    </button>
)}




<button className='cartBtn3 text-lg md:text-2xl px-2 md:px-10'> Order  </button>
</ul>

  )
}

export default CartItem