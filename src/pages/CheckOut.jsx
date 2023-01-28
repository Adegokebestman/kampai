import React from "react";
import { useState } from 'react';
import ShippingInfo from '../components/ShippingInfo';
import UserPayment from '../components/UserPayment';
import "../components/CheckOut.css";
import {TbCalendarTime} from 'react-icons/tb';

export default function MyModal({visible, onClose}) {

  const [page, setPage] = useState(0);

    const FormTitles = ["Shipping Information", "Payment"];
    const [FormData, setFormData] = useState({
      name: "",
      street: "",
      city: "",
      email: "",
      surname: "",
      companyname : "",
      billingaddress: ""

    });

    const PageDisplay = () => {
if (page === 0) {
return <ShippingInfo FormData={FormData} setFormData={setFormData} />;
} else if (page === 1) {
return <UserPayment FormData={FormData} setFormData={setFormData}  />
}
    }

  const handleOnClose = (e) => {
    if(e.target.id  === "container")
    onClose();
  }
  if(!visible) return null;

  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-2/4">
     <div className=" flex flex-col justify-center items-center">
      <div className='progressbar mt-4  '>
          <div style={{width: page === 0 ? "50%"  : "100%"}}> </div>
        </div>

        <h1 className="font-semibold text-center  mb-4 text-2xl text-[#5B5856]">
        {FormTitles[page]}
        </h1>
        <div className="px-10 py-2 flex flex-col font-semibold text-2xl bg-[#FFF1E8]">
      <span className="text-[#FF7E20]"> <TbCalendarTime/> Prefered Date & Time</span>
        </div>
        {/* USE DEFAULT INFO */}
        <button className='cartBtn text-xl px-10'> Use Default Info </button>
        </div>
        {/* <div className="date text-orange-400 ">
    <span className="">
 <h1 className="border-8 border-orange-200"> Prefered Date & Time</h1>
    </span>

        </div> */}

<div className='form-container flex flex-col'></div>
{/* <div className='header'>
    <h1 className="text-center">{FormTitles[page]}</h1>
</div> */}
<div className='body formbody'>
{PageDisplay()}
</div>
<div className='footer flex mt-8 mb-8 justify-center items-center'>
<button className="px-5 py-2 mr-8 bg-[#FF7E20]  text-white rounded" disabled={page === 0} onClick={() => {setPage((currPage) => currPage -1);}}>prev</button>

    <button className="px-5 py-2 formbtn text-white rounded" onClick={() => {
      if( page == FormTitles.length -1) {
      alert("form submitted")
    }
    else {
      setPage((currPage) => currPage +1);
    }
      }}
      >
      {page === FormTitles.length -1 ? "submit" : "Next"}
    </button>

</div>

        <div className="text-center">
          {/* <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button> */}
        </div>
      </div>
    </div>
  );
}