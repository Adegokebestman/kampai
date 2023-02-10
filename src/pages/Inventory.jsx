import React from 'react';
import { productList } from '../data/dummy';
import Product from '../components/product';
import "./Order.css";

 export const Order = () => {

  return (
    <div className='btn-count mt-24 p-4 md:mt-10'>
    <span className='border rounded-full border-white boxShadow p-4 font-semibold text-black'> All items </span>
{/* <div className='mt-10 border rounded-2xl h-52 border-white sidebar p-4 '> */}

<div className='mt-10 flex flex-wrap lg:flex-nowrap justify-center'>
    <div className='flex  justify-center items-center absolute'>
<div className='flex m-3 flex-wrap justify-center gap-8 items-center '>


{productList.map((product) => (
  <Product key={product.id} product={product}>

 </Product>

))}

</div>
</div>


</div>

</div>

  )
}

export default Order;