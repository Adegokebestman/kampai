import React, {useState, useEffect} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from '../api/axios';


const PAYMENTMETHOD = '/payment/createUserPaymentInfo';
const GETPAYMENTINFO = '/payment/getUserPaymentInfo';

const PaymentMethod = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errors, setErrors] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

   // set access token to axios defaults headers when it is present in local storage
   useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }
  }, []);

  // axios interceptor to add access token to every request
  axios.interceptors.request.use(
    function (config) {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    axios.get(GETPAYMENTINFO).then((response) => {
      setPaymentInfo(response.data.shippingInfo);
      console.log("PaymentInfo:", paymentInfo)
    });
  }, []);


  const handleSaveClick = async (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const paymentData = {
        name,
        lastName,
        billingAddress,
        companyName,
        cardNumber,
        expiryDate,
        cvv,
        paymentMethod
      };
      const token = localStorage.getItem('accessToken');
      try {
        const response = await axios.post(PAYMENTMETHOD, paymentData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setIsEditing(false);
      } catch (error) {
        console.error(error);
      }
    }
  };


  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Firstname is required';
    }
    if (!lastName) {
      errors.lastName = 'Lastname is required';
    }
    if (!billingAddress) {
      errors.billingAddress = 'Address is required';
    }
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits';
    }
    if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
      errors.expiryDate = 'must be in the format MM/YY';
    }
    if (!cvv || !/^\d{3}$/.test(cvv)) {
      errors.cvv = 'CVV must be 3 digits';
    }
    return errors;
  };

  return (
    <div>
          <div class="md:mt-10 mt-20 grid grid-rows-1 grid-flow-col gap-4 justify-center   items-center">

<div>

<button className='font-medium mr-4 text-black text-xl md:text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../MySettings' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
   Payment Method </p>
  </div>
</div>
 <div className="mt-10 grid grid-rows-none  gap-4   items-center">
 <div className="mt-10 grid grid-rows-none  gap-4   items-center">
 {errors.name && <label htmlFor="name" className=' md:pl-40 md:ml-40 md:mr-40 text-red-700'>{errors.name}</label>}

<div className='justify-center flex'>
{isEditing ? (
  <input id="name" name='name' value={name}   onChange={(event) => setName(event.target.value)} placeholder='Firstname' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
) : (
  <input id="name" value={paymentInfo.name} disabled  placeholder='Firstname' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
)

}

</div>


{errors.lastName && <span className=' md:pl-40 md:ml-40 md:mr-40 text-red-700'>{errors.lastName}</span>}
<div className='justify-center flex'>
{
  isEditing ? (
    <input name='lastName' value={lastName}  onChange={(event) => setLastName(event.target.value)} placeholder='Lastname' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
  ) : (
    <input  disabled value={paymentInfo.lastName} placeholder='Lastname' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
  )
}

</div>


<div className='justify-center flex'>
{errors.companyName && <span className="md:pl-40 md:ml-40 md:mr-40 text-red-700">{errors.companyName}</span>}
{
  isEditing ? (
    <input name='companyName' value={companyName}  onChange={(event) => setCompanyName(event.target.value)} placeholder='Company Name'  className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
  ) : (
    <input value={paymentInfo.companyName}  disabled  placeholder='Company Name'  className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
  )
}

</div>
{errors.billingAddress && <span className="md:pl-40 md:ml-40 md:mr-40 text-red-700">{errors.billingAddress}</span>}

<div className='justify-center flex'>
{isEditing ? (
  <input name='billingAddress' value={billingAddress} onChange={(event) => setBillingAddress(event.target.value)} placeholder='Billing Address' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
): (
  <input disabled value={paymentInfo.billingAddress}  placeholder='Billing Address' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
)}

</div>
{errors.cardNumber && <span className="md:pl-40 md:ml-40 md:mr-40 text-red-700 ">{errors.cardNumber}</span>}

<div className='justify-center flex'>
<br/>
{
  isEditing ? (
    <input name='cardNumber' value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} placeholder='0000 0000 0000 0000' type="text" className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4 focus:border-[#FF7E20] outline-none  border border-[#AF501A] rounded-lg p-4'>
</input>
  ) : (
    <input disabled value={paymentInfo.cardNumber}  placeholder='0000 0000 0000 0000' type="text" className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4 focus:border-[#FF7E20] outline-none  border border-[#AF501A] rounded-lg p-4'>
</input>
  )
}

</div>
<div className='flex justify-center -mx-3'>
<div class=" px-3 mb-5">
{errors.cvv && <span className="error ml-10 text-red-700">{errors.cvv}</span>}

              <div class="flex">
                   <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                 {
                  isEditing ? (
                    <input name='cvv' value={cvv}  onChange={(event) => setCvv(event.target.value)} class="ml-8 pl-10 w-full md:-ml-10 md:pl-10 md:pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FF7E20] " placeholder="CVV" />

                  ) : (
                    <input disabled value={paymentInfo.cvv} type="text" class="ml-8 pl-10 w-full md:-ml-10 md:pl-10 md:pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FF7E20] " placeholder="CVV" />

                  )
                 }
               </div>
               </div>

               <div class=" md:px-3 mb-5">
               {errors.expiryDate && <span className="error ml-16 text-red-700">{errors.expiryDate}</span>}

              <div class="flex">

                   <div class="w-40 z-40 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                  {
                    isEditing ? (
                      <input name='expiryDate' value={expiryDate} onChange={(event) => setExpiryDate(event.target.value)} type="text" class="w-full md:mr-2 mr-14 pl-4 md:-ml-10 md:pl-10 md:pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FF7E20] " placeholder="Expire Date" />

                    ) : (
                      <input disabled value={paymentInfo.expiryDate} onChange={(event) => setExpiryDate(event.target.value)} type="text" class="w-full md:mr-2 mr-14 pl-4 md:-ml-10 md:pl-10 md:pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FF7E20] " placeholder="Expire Date" />

                    )
                  }
               </div>
               </div>

</div>

<div className='justify-center flex'>
{
  isEditing ? (
    <select name='paymentMethod' onChange={(event) => setPaymentMethod(event.target.value)} class="form-select text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-offset-2  mb-8  dark:border-[#FF7E20]  dark:bg-[#FF7E20]  bg-white font-normal w-2/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow">
                <option className='text-gray-400'>Select Payment Method</option>
                <option>VISA</option>
                <option>APPLE PAY</option>
                <option>MASTERCARD</option>
              </select>
  ) : (
    <select disabled value={paymentInfo.paymentMethod} class="form-select text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-offset-2  mb-8  dark:border-[#FF7E20]  dark:bg-[#FF7E20]  bg-white font-normal w-2/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow">
                <option className='text-gray-400'>Select Payment Method</option>
                <option>VISA</option>
                <option>APPLE PAY</option>
                <option>MASTERCARD</option>
              </select>
  )
}

</div>

<div className='flex justify-center mb-10'>
{isEditing ? (
  <button onClick={handleSaveClick}  class="py-2  px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">Save</button>
) : (
  <button onClick={handleEditClick}  class="py-2 justify-center flex px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">Edit</button>
)}
      </div>

</div>

 </div>

    </div>
  )
}

export default PaymentMethod;