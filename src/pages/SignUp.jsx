import React, { useState } from 'react';
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
  const [errors, setErrors] = useState({});


const [formData, setFormData] = useState({
  name: '',
  lastName: '',
  email: '',
  password:'',
  userType: selectedRole
});



const navigate = useNavigate();

  const handleInputChange = (event) => {
// const {name, value} = event.target;
setFormData({ ...formData, [event.target.name]:event.target.value})
  };

  //Form validation
  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Please enter a name';
    }
    if (!formData.lastName) {
      errors.lastName = 'Please enter your lastname';
    }
    if (!formData.password) {
      errors.password = 'Please enter a password';
    }
    if (!formData.email) {
      errors.email = 'Please enter an email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    return errors;
  }

  const handleSubmit = async (event)=> {
event.preventDefault();
//validation
const validationErrors = validateForm(formData);
if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        console.log(formData)
        const response = await axios.post(REGISTER_URL, formData);
        //localStorage.setItem(response.data.accessToken);
        console.log('User registered successfully');
        console.log(response.data)
         // store the access token in localStorage
         localStorage.setItem('accessToken', response.data.accessToken);
         localStorage.setItem('email', formData.email);
       // window.location.href = '/otp';
        navigate(`/otp?access_token=${response.data.accessToken}&email=${formData.email}`)

      // Navigate to the OTP page and pass along the access token and email
      //window.location.href = `/otp?access_token=${response.data.accessToken}&email=${formData.email}`;


      } catch (error) {
        console.log(error);
      }
    }

  };



  return (
     <div className='bg-[#FF7E20]    h-screen'>


<div className="w-full ml-auto mr-auto block pt-28 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
<div className=" ml-20 pb-10 text-center">
  <img style={{width:'190px'}}  src={kanpai}/>
</div>
<form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
<div className="space-y-1 text-sm">
      {/* <label for="Ema" className="block dark:text-gray-400">Username</label> */}
      <input type="text" value={formData.name} onChange={handleInputChange} name="name" id="name" placeholder="Enter First Name" className="w-full px-4 py-3 rounded-md border-white" />
      {errors.name && <span>{errors.name}</span>}
  </div>
  <div className="space-y-1 text-sm">
      {/* <label for="Ema" className="block dark:text-gray-400">Username</label> */}
      <input type="text" value={formData.lastName} onChange={handleInputChange} name="lastName" id="lastName" placeholder="Enter Last Name" className="w-full px-4 py-3 rounded-md border-white" />
      {errors.lastName && <span>{errors.lastName}</span>}
  </div>
  <div className="space-y-1 text-sm">
      {/* <label for="Ema" className="block dark:text-gray-400">Username</label> */}
      <input type="text" value={formData.email} onChange={handleInputChange} name="email" id="email" placeholder="Enter Email" className="w-full px-4 py-3 rounded-md border-white" />
      {errors.email && <span>{errors.email}</span>}
  </div>
  <div className="space-y-1 text-sm">
      <input type="text" hidden value={selectedRole}  className="w-full px-4 py-3 rounded-md border-white" />
  </div>
  <div className="space-y-1 text-sm">
      {/* <label for="password" className="block dark:text-gray-400">Password</label> */}
      <input type="password" value={formData.password} onChange={handleInputChange} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-white" />
      {errors.password && <span>{errors.password}</span>}

      <div className="flex justify-end text-xs dark:text-gray-400">
          <a rel="noopener noreferrer" href="#">Forgot Password?</a>
      </div>
  </div>
  <button type='submit' style={{background: 'linear-gradient(180deg, #2F86FB 0%, #004AAD 100%)'}} className="block w-full p-3 text-center rounded-sm text-white">Create Account</button>
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