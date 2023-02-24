import React, {useState, useContext} from 'react'
import kanpai from '../data/kanpai.png';
import Glogo from '../data/Glogo.png';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import AuthContext from '../contexts/AuthProvider';


const LOGIN_URL = '/auth/Login';

const Login = () => {
	const {setAuth} =useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(!email || !password) {
			setError("Please enter both email and password");
			return;
		}
		try {
			const response = await axios.post(LOGIN_URL, {
			  email: email,
			  password: password,
			});
			// Handle response from API
			console.log(response.data);
			const accessToken = (response.data.accessToken);
			setAuth({email, password, accessToken});
			console.log(setAuth)
			//redirects to dashboard
			// window.location.href = "/dashboard";
		  } catch (error) {
			console.log(error);
		  }

	};

  return (
    <div className='bg-[#FF7E20]    h-screen'>


      <div className="w-full ml-auto mr-auto block pt-36 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
	  <div className=" ml-20 pb-10 text-center">
		<img style={{width:'190px'}}  src={kanpai}/>
	</div>
	<form novalidate="" onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
	{error && <div className='text-red-600 font-bold'>{error}</div>}
		<div className="space-y-1 text-sm">
			{/* <label for="Ema" className="block dark:text-gray-400">Username</label> */}
			<input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id="email" placeholder="Enter Email" className="w-full px-4 py-3 rounded-md border-white" />
		</div>
		<div className="space-y-1 text-sm">
			{/* <label for="password" className="block dark:text-gray-400">Password</label> */}
			<input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-white" />
			<div className="flex justify-end text-xs dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button style={{background: 'linear-gradient(180deg, #2F86FB 0%, #004AAD 100%)'}} className="block w-full p-3 text-center rounded-sm text-white">Sign in</button>
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
	<p className="text-16 text-center sm:px-6 text-white font-medium">Don't have an account?
		<Link to='../signup'>
		<span rel="noopener noreferrer" href="" className="underline text-[#FFD702]">Sign up
		</span>
		</Link>
	</p>
</div>
    </div>
  )
}

export default Login