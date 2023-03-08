import React, { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Order.css";
import CartContext from "../contexts/Cart/CartContext";

const Product = ({ product }) => {
  const { addToCart, increase, cartItems,removeFromCart, sumItems, itemCount } =  useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item._id === product._id);
  };

  return (
    <ul className="flex container flex-row bg-white text-center boxShadow  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl">
      <li className="flex-item pr-2 md:pr-4">
        <img src={product.photo} />
      </li>
      {/* <li className="mr-2 mt-4 md:mr-20 md:mt-8"> {product.id}</li> */}

      <li className="pt-4 leading-5 mr-2 md:font-medium p-2 md:p-8 md:mr-16 w-10 md:w-52">
        {product.productName} <br />
        <span className="status"> Available {product.available} </span>
      </li>

      <li className="ml-2 mr-3 md:ml-8 md:mr-16 mt-8 md:font-medium">${product.price} </li>

      <span className="rounded-full border-white bg-[#D0F4D0] text-[#147D30] mt-6 mr-5 pt-2 pb-4 pr-2 pl-2 mb-8
      md:mt-8 md:pt-2 md:mr-10 md:mb-8 md:pb-8 md:pr-4 md:pl-4 md:rounded-full ">
        {product.status? 'available' : 'unavailable'}
      </span>



        {/* {isInCart (product) && (
          <button
        onClick={() => {
          increase(product);
        }}
        className="ml-8 mr-4 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#D0F4D0] text-[#147D30] "
      >
        <BsPlusLg />
      </button>
        )}


      <span className="pt-9">0</span>

      <button  className="ml-4 mr-20 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#F9BFB5] text-[#EF3838]">
        <FaMinus />
      </button> */}

      <button class=" mr-4 text-[#FF7E20] text-2xl ">
        <AiOutlineShoppingCart />
      </button>


        {isInCart(product) && (
          <button
            // onClick={() => addToCart(product)}
            className="cartBtn2 text-sm md:text-lg"
          >
            {/* Add More */} Added to cart
          </button>
        )}

      {!isInCart(product) && (
        <button onClick={() => addToCart(product)} className="cartBtn text-sm md:text-xl">
          Add to Cart
        </button>
      )}
    </ul>
  );
};

export default Product;
