import React, {useState, useEffect} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CheckOut } from '.';
import axios from '../api/axios';


const PAYMENTMETHOD = '/payment/createUserPaymentInfo';
const PaymentMethod = () => {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState({});
  const [lastName, setLastName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isEditingCardNumber, setIsEditingCardNumber] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingBillingAddress, setIsEditingBillingAddress] = useState(false);
  const [isEditingExpiryDate, setIsEditingExpiryDate] = useState(false);
  const [isEditingCvv, setIsEditingCvv] = useState(false);
  const [isEditingPaymentMethod, setIsEditingPaymentMethod] = useState(false);
  const [isEditingCompany, setIsEditingCompany] = useState(false);


  function handleNameEditClick() {
    setIsEditingName(true);
    setName(userData.name);
  }

  function handleCardNumberEditClick() {
    setIsEditingCardNumber(true);
    setCardNumber(userData.cardNumber);
  }

  function handleBillingAddressEditClick() {
    isEditingBillingAddress(true);
    setBillingAddress(userData.description);
  }

  function handleExpiryDateEditClick() {
    setIsEditingExpiryDate(true);
    setExpiryDate(userData.description);
  }

  function handleCvvEditClick() {
    setIsEditingCvv(true);
    setCvv(userData.description);
  }

  function handlePaymentMethod() {
    setIsEditingPaymentMethod(true);
    setPaymentMethod(userData.description);
  }

  function handleCompanyEditCLick() {
    setIsEditingCompany(true);
    setCompanyName(userData.description);
  }


  function handleNameSaveClick() {
    // Send the updated name to the API
    fetch("https://api.example.com/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        name: nameInput
      })
    })
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setIsEditingName(false);
      })
      .catch(error => console.error(error));
  }

  function handleNumberSaveClick() {
    // Send the updated number to the API
    fetch("https://api.example.com/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        number: numberInput
      })
    })
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setIsEditingNumber(false);
      })
      .catch(error => console.error(error));
  }

  function handleDescriptionSaveClick() {
    // Send the updated description to the API
    fetch("https://api.example.com/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        description: descriptionInput
      })
    })
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setIsEditingDescription(false);
      })
      .catch(error => console.error(error));
  }

  function handleNameInputChange(event) {
    setNameInput(event.target.value);
  }

  function handleNumberInputChange(event) {
    setNumberInput(event.target.value);
  }

  function handleDescriptionInputChange(event) {
    setDescriptionInput(event.target.value);
  }

  const handleSubmit = async (event) => {
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
 <form onSubmit={handleSubmit} className="mt-10 grid grid-rows-none  gap-4   items-center">
 {errors.name && <label htmlFor="name" className=' md:pl-40 md:ml-40 md:mr-40 text-red-700'>{errors.name}</label>}

<div className='justify-center flex'>
<input id="name" value={name}  onChange={(event) => setName(event.target.value)} placeholder='Firstname' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
</div>


{errors.lastName && <span className=' md:pl-40 md:ml-40 md:mr-40 text-red-700'>{errors.lastName}</span>}
<div className='justify-center flex'>

<input   onChange={(event) => setLastName(event.target.value)} placeholder='Lastname' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
</div>


<div className='justify-center flex'>
{errors.companyName && <span className="md:pl-40 md:ml-40 md:mr-40 text-red-700">{errors.companyName}</span>}

<input  onChange={(event) => setCompanyName(event.target.value)} placeholder='Company Name'  className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
</div>
{errors.billingAddress && <span className="md:pl-40 md:ml-40 md:mr-40 text-red-700">{errors.billingAddress}</span>}

<div className='justify-center flex'>

<input  onChange={(event) => setBillingAddress(event.target.value)} placeholder='Billing Address' className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4  focus:border-[#FF7E20] outline-none border border-[#AF501A] rounded-lg p-4'>
</input>
</div>
{errors.cardNumber && <span className="md:pl-40 md:ml-40 md:mr-40 text-red-700 ">{errors.cardNumber}</span>}

<div className='justify-center flex'>
<br/>
<input  onChange={(event) => setCardNumber(event.target.value)} placeholder='0000 0000 0000 0000' type="text" className=' md:pl-10 md:ml-40 md:mr-40 w-3/4 md:w-2/4 focus:border-[#FF7E20] outline-none  border border-[#AF501A] rounded-lg p-4'>
</input>
</div>
<div className='flex justify-center -mx-3'>
<div class=" px-3 mb-5">
{errors.cvv && <span className="error ml-10 text-red-700">{errors.cvv}</span>}

              <div class="flex">
                   <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                   <input  onChange={(event) => setCvv(event.target.value)} type="text" class="ml-8 pl-10 w-full md:-ml-10 md:pl-10 md:pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FF7E20] " placeholder="CVV" />
               </div>
               </div>

               <div class=" md:px-3 mb-5">
               {errors.expiryDate && <span className="error ml-16 text-red-700">{errors.expiryDate}</span>}

              <div class="flex">

                   <div class="w-40 z-40 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                   <input  onChange={(event) => setExpiryDate(event.target.value)} type="text" class="w-full md:mr-2 mr-14 pl-4 md:-ml-10 md:pl-10 md:pr-3 py-4 rounded-lg border-2 border-gray-200 outline-none focus:border-[#FF7E20] " placeholder="Expire Date" />
               </div>
               </div>

</div>

<div className='justify-center flex'>

<select onChange={(event) => setPaymentMethod(event.target.value)} class="form-select text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-offset-2  mb-8  dark:border-[#FF7E20]  dark:bg-[#FF7E20]  bg-white font-normal w-2/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow">
                <option className='text-gray-400'>Select Payment Method</option>
                <option>VISA</option>
                <option>APPLE PAY</option>
                <option>MASTERCARD</option>
              </select>
</div>

<div className='flex justify-center mb-10'>
 <button
        class="py-2 px-10 bg-transparent text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Save</button>
      </div>

</form>

 </div>

    </div>
  )
}

export default PaymentMethod;