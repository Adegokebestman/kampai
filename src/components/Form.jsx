import React, { useState } from 'react';
import ShippingInfo from './ShippingInfo';
import UserPayment from './UserPayment';

const Form = () => {
    const [page, setPage] = useState(0);

    const FormTitles = ["Shipping Information", "Payment"];

    const PageDisplay = () => {
if (page === 0) {
return <ShippingInfo />;
} else if (page === 1) {
return <UserPayment />
}
    }


  return (
    <div className='form'>
<div className='progressbar'></div>
<div className='form-container'></div>
<div className='header'>
    <h1>{FormTitles[page]}</h1>
</div>
<div className='body'></div>
<div className='footer'>
<button disabled={page == 0} onClick={() => {setPage((currPage) => currPage -1);}}>Confirm</button>

    <button disabled={page == FormTitles.length -1} onClick={() => {setPage((currPage) => currPage +1);}}>Confirm</button>
</div>


    </div>
  )
}

export default Form