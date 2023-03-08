import React, { useState, useEffect } from "react";
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import {BiPencil} from 'react-icons/bi';
import {BsCamera} from 'react-icons/bs';
import './UserInfo.css';
import axios from '../api/axios';


function ProfilePage() {
  const [accessToken, setAccessToken] = useState("");
  const [userData, setUserData] = useState({});
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingNumber, setIsEditingNumber] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  useEffect(() => {
    // Check if the user is logged in and has an access token
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
      // Get the user's data from the API
      fetch("https://api.example.com/user", {
        headers: {
          Authorization: `Bearer ${storedAccessToken}`
        }
      })
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error(error));
    } else {
      // Redirect to the login page if the user is not logged in
      window.location.href = "/login";
    }
  }, []);

  function handleNameEditClick() {
    setIsEditingName(true);
    setNameInput(userData.name);
  }

  function handleNumberEditClick() {
    setIsEditingNumber(true);
    setNumberInput(userData.number);
  }

  function handleDescriptionEditClick() {
    setIsEditingDescription(true);
    setDescriptionInput(userData.description);
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

  return (
    <div>

       <div className="mt-20 md:mt-10 grid grid-rows-1 grid-flow-col gap-4 justify-center   items-center">

<div>

<button className='mr-4 text-black text-xl md:text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../MySettings' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
   Personal Information </p>
  </div>
</div>


<div className=" mt-10 grid grid-rows-2 grid-flow-col justify-center  items-center ">
<div>
	<img src={barInfo.photo} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
  {/* {productImagePreview && (
          <img src={productImagePreview} alt="Product Preview" style={{ maxWidth: '200px' }} className="w-32 h-32 mx-auto border rounded-full dark:bg-gray-500 aspect-square" />
        )} */}
  <div className=' border bg-white  w-10 h-10 p-2 ml-40 camera -mt-10  text-black rounded-full'>

  <label htmlFor="image"><BsCamera onClick={handleEditClick} className='text-2xl cursor-pointer' /></label>
  {isEditing? (
    <input style={{display: 'none'}}
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageUpload}
        />
  ) : null }




              </div>
 {/* <div className='w-14 h-14 bg-[#FF7E20] relative rounded-full'>
  <BsCamera className='text-2xl ml-24 camera'/>
  </div> */}
  </div>

  <div>
  {isEditing ? (
        <input className="border border-white sidebar rounded-lg p-2 mb-2"
          type="text"
          name="name"
          placeholder={barInfo.name}
          value={userData.name}
          onChange={handleInputChange}
        />
      ) : (
        <p className='font-semibold text-2xl inline-block ml-2'>
 {barInfo.name} <button onClick={handleEditClick}
  className="font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2 mb-2">

       <BiPencil/>
</button> </p>
  )}

   {/* <button className='font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='/' >
<BiPencil/>
</Link>
 </button> */}
 <div>
 {isEditing ? (
        <input className="border border-white sidebar rounded-lg p-2 mb-2"
          type="number"
          placeholder={barInfo.phone}
          name="phone"
          value={userData.phone}
          onChange={handleInputChange}
        />
      ) : (
        <p className='font-medium text-lg inline-block ml-2'>
 {barInfo.phone}  <button onClick={handleEditClick} className='font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<BiPencil />

 </button>
   </p>
   )}

   {/* <button className='font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='/' >
<BiPencil/>
</Link>
 </button> */}

  </div>
  </div>



</div>

<div className='w-11/12 md:w-9/12  px-3 mb-2 mt-2 md:ml-20'>
<h2 className=" text-xl font-semibold sm:text-2xl">Bar description</h2>
{isEditing ? (
        <textarea className='mt-4 bg-white rounded-2xl sidebar border border-white leading-normal resize-none w-full msg py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
          name="description"
          value={userData.description}
          placeholder={barInfo.description}
          onChange={handleInputChange}
        />
      ) : (
        <textarea disabled value={barInfo.description}  className='mt-4 bg-white rounded-2xl sidebar border border-white leading-normal resize-none w-full msg py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'></textarea>
      )}

      <div>
{isEditing ? (
  <button onClick={handleSaveClick}  class="py-2  px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">Save</button>
) : (
  <button onClick={handleEditClick}  class="py-2 justify-center flex px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">Edit</button>
)}
</div>
</div>

    </div>
  )

}
export default ProfilePage;
