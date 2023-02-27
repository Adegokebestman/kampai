import React, { useState, useEffect } from 'react';
import kanpai from '../data/kanpai.png';
import Glogo from '../data/Glogo.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import {useNavigate} from 'react-router-dom';



const REGISTER_URL = '/create/RegisterUser';
const SignUp = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedRole = queryParams.get('role');

  const navigate = useNavigate()


  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("buyer")
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleValidation = () => {
    let isValid = true;
    if (!name.match(/^[a-zA-Z]+$/)) {
      setNameError("First name can only contain letters");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!lastName.match(/^[a-zA-Z]+$/)) {
      setLastNameError("Last name can only contain letters");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (
      !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      setIsLoading(true);

      // send data to API using Axios
      const data = { name, lastName, email, password, userType };
      console.log(data)
      axios
        .post(REGISTER_URL, data)
        .then((response) => {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("email", email);
          navigate(`/otp?access_token=${response.data.accessToken}&email=${email}`)
          console.log(response);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  };

  const handleFirstNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setLastName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };







  return (
     <div className='bg-[#FF7E20]    h-screen'>


<div className="w-full ml-auto mr-auto block pt-10 md:pt-10 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
<div className=" ml-20 pb-10 text-center">
  <img style={{width:'190px'}}  src={kanpai}/>

</div>
<form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
<div className="space-y-1 text-sm">
      {/* <label for="Ema" className="block dark:text-gray-400">Username</label> */}
      <input type="text" value={name} onChange={handleFirstNameChange} name="name" id="name" placeholder="Enter First Name" className="w-full px-4 py-3 rounded-md border-white" />
      {nameError && <span>{nameError}</span>}
  </div>
  <div className="space-y-1 text-sm">
      {/* <label for="Ema" className="block dark:text-gray-400">Username</label> */}
      <input type="text" value={lastName} onChange={handleLastNameChange} name="lastName" id="lastName" placeholder="Enter Last Name" className="w-full px-4 py-3 rounded-md border-white" />
      {lastNameError && <span>{lastNameError}</span>}
  </div>
  <div className="space-y-1 text-sm">
      {/* <label for="Ema" className="block dark:text-gray-400">Username</label> */}
      <input type="text" value={email} onChange={handleEmailChange} name="email" id="email" placeholder="Enter Email" className="w-full px-4 py-3 rounded-md border-white" />
      {emailError && <span>{emailError}</span>}
  </div>
  <div className="space-y-1 text-sm">
      <input type="text" hidden value="buyer"  className="w-full px-4 py-3 rounded-md border-white" />
  </div>
  <div className="space-y-1 text-sm">
      {/* <label for="password" className="block dark:text-gray-400">Password</label> */}
      <input type="password" value={password} onChange={handlePasswordChange} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-white" />
      {passwordError && <span>{passwordError}</span>}

      <div className="flex justify-end text-xs dark:text-gray-400">
          <a rel="noopener noreferrer" href="#">Forgot Password?</a>
      </div>
  </div>
  <button disabled={isLoading} type='submit' style={{background: 'linear-gradient(180deg, #2F86FB 0%, #004AAD 100%)'}} className="block w-full p-3 text-center rounded-sm text-white">
  {isLoading ?
  <span>
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg> Loading </span>: "Create Account"}
  </button>
</form>
<div className="flex items-center pt-4 space-x-1">
  <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
  <p className="px-3 text-md text-white">Or</p>
  <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
</div>
<div className="flex justify-center space-x-4">
  <button aria-label="Log in with Google" className="p-3 rounded-sm">
      <img style={{width:'44px'}} className='rounded-full p-2 bg-white w-24' src={Glogo} />
  </button>

</div>
<p className="text-16 text-center sm:px-6 text-white font-medium">Already have an account?
  <Link to='../Login'>
  <span rel="noopener noreferrer" href="#" className="underline text-[#FFD702]">Login</span>
  </Link>
</p>
</div>
    </div>
  )
}

export default SignUp