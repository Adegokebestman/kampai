import React, {useEffect, useState} from 'react';
import { productList } from '../data/dummy';
import Product from '../components/product';
import "./Order.css";
import axios from '../api/axios';

const PRDUCTLIST = '/products/getAllProducts'
 export const Order = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('accessToken');

      try {
        const response = await axios.get(PRDUCTLIST,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(response.data)
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);




  return (
    <div className='btn-count mt-24 p-4 md:mt-10'>
    <span className='border rounded-full border-white boxShadow p-4 font-semibold text-black'> All items </span>
{/* <div className='mt-10 border rounded-2xl h-52 border-white sidebar p-4 '> */}

<div className='mt-10 flex flex-wrap lg:flex-nowrap justify-center'>
    <div className='flex  justify-center items-center absolute'>
<div className='flex m-3 flex-wrap justify-center gap-8 items-center '>


{products.map((product, index) => (
  <Product key={product._id} product={product}>

 </Product>

))}

</div>
</div>


</div>


</div>

  )
}

export default Order;