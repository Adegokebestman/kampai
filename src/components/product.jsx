import React, { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Order.css";
import CartContext from "../contexts/Cart/CartContext";

const Product = ({ product }) => {
  const { addToCart, increase, cartItems, sumItems, itemCount } =  useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <ul className="flex container flex-row bg-white text-center sidebar  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl">
      <li className="flex-item pr-4">
        <img src={product.image} />
      </li>
      <li className="mr-20 mt-8"> {product.id}</li>

      <li className="p-8 mr-16 font-medium">
        {product.name} <br />
        <span className="status"> Available {product.quantity} </span>
      </li>

      <li className="ml-8 mr-16 mt-8 font-medium"> {product.price} </li>
      <span className="border rounded-full border-white bg-[#D0F4D0] text-[#147D30] mt-8 mr-10 pt-2 pb-8 pr-4 pl-4 mb-8 ">

        {product.status}
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

      <button class="mr-4 text-[#FF7E20] text-2xl">
        <AiOutlineShoppingCart />
      </button>


        {isInCart(product) && (
          <button
            onClick={() => {
              increase(product);
            }}
            className="cartBtn2 text-lg"
          >
            {/* Add More */} Added to Cart
          </button>
        )}

      {!isInCart(product) && (
        <button onClick={() => addToCart(product)} className="cartBtn text-xl">
          Add to Cart
        </button>
      )}
    </ul>
  );
};

export default Product;
