import React, {useState, useEffect} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from '../api/axios';

const ShipAddress = () => {
  const GET_SHIPPING_INFO = '/shipping/getUserShippingInfo';
  const CREATE_SHIPPING_INFO = '/shipping/createUserShippingInfo';
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [shippingInfo, setShippingInfo] = useState('');
  const [errors, setErrors] = useState('');

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
    axios.get(GET_SHIPPING_INFO).then((response) => {
      setShippingInfo(response.data);
      console.log("SHipping:", shippingInfo)
    });
  }, []);


  const handleSaveClick = async (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const shippingData = {
        name,
        street,
        postalCode,


              };
      const token = localStorage.getItem('accessToken');
      try {
        const response = await axios.post(CREATE_SHIPPING_INFO, shippingData, {
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
      errors.name = 'Fullname is required';
    }
    // if (!lastName) {
    //   errors.lastName = 'Lastname is required';
    // }
    if (!street) {
      errors.street = 'Address is required';
    }

    if (!postalCode) {
      errors.postalCode = 'Postal Code is required';
    }

    // if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
    //   errors.expiryDate = 'must be in the format MM/YY';
    // }
    // if (!cvv || !/^\d{3}$/.test(cvv)) {
    //   errors.cvv = 'CVV must be 3 digits';
    // }
    return errors;
  };

  return (
    <div>
          <div class="md:mt-10 mt-24 grid grid-rows-1 grid-flow-col gap-4 justify-center   items-center">

<div>

<button className='font-medium mr-4 text-black text-xl md:text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../MySettings' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
   Shipping Address  </p>
  </div>
</div>

<div class="mt-10 grid grid-rows-6 grid-flow-col gap-4   items-center">

<div className='justify-center flex'>
{errors.name && <span className=' md:pl-40 md:ml-40 md:mr-40 text-red-700'>{errors.name}</span>}

{
  isEditing ? (
    <input placeholder='Fullname' value={name}   onChange={(event) => setName(event.target.value)} className='w-3/4 md:pl-10 md:ml-40 md:mr-40 md:w-2/4  text-[#AF501A]  border border-[#AF501A] rounded-lg p-4'>
</input>
  ) : (
    <input disabled placeholder='Fullname' value={shippingInfo.name} className='w-3/4 md:pl-10 md:ml-40 md:mr-40 md:w-2/4  text-[#918f8f]  border border-[#AF501A] rounded-lg p-4'>
</input>
  )
}



</div>

<div className='justify-center flex'>
{errors.street && <span className=' md:pl-40 md:ml-40 md:mr-40 text-red-700'>{errors.street}</span>}

{
  isEditing ? (
    <input placeholder='Street, Street Number ' value={street}   onChange={(event) => setStreet(event.target.value)} className='w-3/4 md:pl-10 md:ml-40 md:mr-40 md:w-2/4  text-[#AF501A]  border border-[#AF501A] rounded-lg p-4'>
</input>
  ) : (
    <input disabled placeholder='Street, Street Number ' value={shippingInfo.street}  className='w-3/4 md:pl-10 md:ml-40 md:mr-40 md:w-2/4  text-[#918f8f]  border border-[#AF501A] rounded-lg p-4'>
</input>
  )
}


</div>

<div className='justify-center flex'>
{errors.postalCode && <span className=' md:pl-40 md:ml-40 md:mr-40 text-red-700'>{errors.postalCode}</span>}

{
  isEditing ? (
    <input placeholder='City Postal Code Country' value={postalCode} onChange={(event) => setPostalCode(event.target.value)} className='w-3/4 md:pl-10 md:ml-40 md:mr-40 md:w-2/4  text-[#AF501A]  border border-[#AF501A] rounded-lg p-4'>
</input>
  ) : (
    <input disabled placeholder='City Postal Code Country' value={shippingInfo.postalCode} className='w-3/4 md:pl-10 md:ml-40 md:mr-40 md:w-2/4  text-[#918f8f]  border border-[#AF501A] rounded-lg p-4'>
</input>
  )
}

</div>

<div className='flex justify-center'>
{
  isEditing ? (
    <button onClick={handleSaveClick}
        class="py-2 px-10 bg-transparent text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Save</button>
  ) : (
    <button onClick={handleEditClick}
        class="py-2 px-10 bg-transparent text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Edit</button>
  )
}

      </div>
</div>





    </div>
  )
}

export default ShipAddress