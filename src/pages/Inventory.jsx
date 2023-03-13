import React, { useEffect, useState } from 'react';
import Product from '../components/product';
import './Order.css';
import { getAllProducts } from '../api/axios';

export const Order = () => {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(async () => {
		const accessToken = localStorage.getItem('accessToken');
		let mounted = true;
		if (mounted) {
			const { products } = await getAllProducts(accessToken);
			setAllProducts(products);
			console.log(products);
		}
	}, []);

	return (
		<div className='btn-count mt-24 p-4 md:mt-10'>
			<span className='border rounded-full border-white boxShadow p-4 font-semibold text-black'>
				All items
			</span>
			{/* <div className='mt-10 border rounded-2xl h-52 border-white sidebar p-4 '> */}

			<div className='mt-10 flex flex-wrap lg:flex-nowrap justify-center'>
				<div className='flex  justify-center items-center absolute'>
					<div className='flex m-3 flex-wrap justify-center gap-8 items-center '>
						{allProducts &&
							allProducts.map((product) => (
								<Product key={product._id} product={product} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
