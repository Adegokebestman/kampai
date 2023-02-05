import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import {FaEdit} from 'react-icons/fa';
import {BiCurrentLocation} from 'react-icons/bi';
import { useStateContext } from '../contexts/ContextProvider';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { Button } from '../components';

const Dashboard = () => {
  return (
    <div className='mt-12'>
    <div className='flex flex-wrap lg:flex-nowrap justify-center'>
    <div className='bg-white sidebar dark:text-gray-200 dark:bg-secondary-dark-bg h-22 rounded-xl w-80 lg:w-11/12 p-8 pt-9 m-3 '>

<div className='flex font-semibold justify-between items-center'>
<p className='font-bold text-2xl'> Welcome, Jannet</p>

<div>
<Link to="/Inventory">
<Button color="white" bgColor="#FF7E20" text="CHECK YOUR INVENTORY" borderRadius="10px"  />
</Link>

</div>
</div>
{/* button */}
  {/* <div className='mt-6'>
<Button color="white" bgColor="#FF7E20" text="Download" borderRadius="10px" />
  </div> */}
    </div>


</div>
<div className='flex m-3 flex-wrap justify-center gap-20 items-center'>
      {/* check database to accept input */}
  {earningData.map((item) =>(
    <div key={item.title} className="bg-white text-center sidebar dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72 h-72 p-4 pt-20 rounded-2xl">
    <button type='button' style={{color:item.iconColor, backgroundColor: item.iconBg}} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
    {item.icon}
    </button>
    <p className='mt-3'>
      <span className='text-2xl font-semibold'>
      {item.amount}
      </span>

    </p>
    <span className={`text-sm`}>
      {item.title}
      </span>
     </div>
 ))}

    </div>
    <div className='flex justify-end float-right font-semibold rounded-full mt-8 mr-16 pr-10 bg-white sidebar items-center'>

    <BiCurrentLocation className='text-4xl m-8 text-[#FF7E20]' />

<div>
<Link to="../Myorder">

<Button className="m-12" color="white" bgColor="#FF7E20" text=" Track Order" borderRadius="10px" />
</Link>

</div>

</div>
    </div>
  )
}

export default Dashboard