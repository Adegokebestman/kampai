import React, {useState} from 'react'
import kanpai from '../data/kanpai.png';
import bar from '../data/bar.png';
import truck_driver from '../data/truck_driver.png';
import supplier from '../data/supplier.png';
// import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const Roles = () => {
const [selectedRole, setSelectedRole] = useState("");
const navigate = useNavigate();
// const handleRoleAssignment = (event) => {
// 	const selectedRole = event.target.value;
//     setSelectedRole(selectedRole);
// 	console.log(selectedRole)
// }

const handleRoleAssignment = (role) => {
	setSelectedRole(role);
	// navigate(`/signup?role=${role}`);
	const roleLink = {
                "buyer":"http://localhost:3000/signup",
		"supplier": 'http://localhost:3001/signup',
		"truck": 'http://localhost:3002/signup'
	}
	console.log(role)
	window.location.href = roleLink[role];


}



return (
    <div className='bg-[#FF7E20]  h-screen'>
	 <div className='pt-20'>
<img className=' ml-auto mr-auto  block w-3/6 md:w-2/12' src={kanpai} alt="kanpai logo" />
  </div>

  <div>
  <section className="py-6 mt-12 dark:bg-gray-800">
	<div className=" flex flex-col items-center justify-center p-4 mx-auto">
		<div className="grid grid-cols-3 gap-5 lg:grid-cols-3 sm:grid-cols-3">
			<div>
			<p className='m-2 text-lg md:text-2xl text-center text-white'> Bar?</p>
<div  className='boxShadow imgHolder pb-24 rounded-lg bg-white'>

<img className='pt-10 imgSize' src={bar} alt="buyer" onClick={()=> handleRoleAssignment ('buyer')} />
		</div>
			</div>

			<div>
			<p className='m-2 text-lg md:text-2xl text-center text-white'>Supplier?</p>
			<div  className='boxShadow imgHolder  rounded-lg bg-white'>

			<img onClick={()=> handleRoleAssignment ('supplier')} alt="supplier" className="object-cover pt-10  dark:bg-gray-500 aspect-square imgSize" src={supplier} />
</div>
	</div>
			<div className='w-full'>
			<p className=' m-2 text-lg md:text-2xl text-center text-white'> Driver?</p>
			<div className='boxShadow imgHolder  pb-24 rounded-lg bg-white'>

			<img onClick={()=> handleRoleAssignment ('truck')} alt="driver" className=" pt-10 dark:bg-gray-500 aspect-square imgSize" src={truck_driver} />
		</div>
	</div>
		</div>

		{/* <Link to={`/signup?role=${selectedRole}`}>
          <button>Signup as {selectedRole}</button>
        </Link> */}

	</div>
</section>
  </div>
</div>
  )
}

export default Roles
