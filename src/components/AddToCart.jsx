import React, { useState } from 'react';

function AddToCart({ item }) {
  const [cart, setCart] = useState([]);

  function handleClick() {
    setCart([...cart, item]);
  }

  return (
    <button onClick={handleClick}>
      Add to Cart
    </button>
  );
}

export default AddToCart;
