import React from 'react';
import apple from '../data/apple.png';

const UserPayment = ({FormData, setFormData}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <input  placeholder='Name' autoComplete="off" className="text-gray-600 px-24 dark:text-gray-400 focus:outline-none  mb-4 igo-700  dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-3/4 md:w-2/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
        value={FormData.name} onChange={(event) => setFormData({...FormData, name: event.target.value})}  />

 <input  placeholder='Company Name' autoComplete="off" className="text-gray-600 dark:text-gray-400 focus:outline-none  mb-4 igo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-3/4 md:w-2/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
 value={FormData.company} onChange={(event) => setFormData({...FormData, company: event.target.value})} />

 <input  placeholder='Billing Address' autoComplete="off" className="text-gray-600 dark:text-gray-400 focus:outline-none  focus:ring-offset-2  mb-4  dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-3/4 md:w-2/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
 value={FormData.billingaddress} onChange={(event) => setFormData({...FormData, billingaddress: event.target.value})} />

 <input  placeholder='Surname' autoComplete="off" className="text-gray-600 dark:text-gray-400 focus:outline-none  focus:ring-offset-2  mb-4  dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-3/4 md:w-2/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
 value={FormData.surname} onChange={(event) => setFormData({...FormData, surname: event.target.value})} />

<select class="form-select text-gray-600 dark:text-gray-400 focus:outline-none  focus:ring-offset-2  mb-4  dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-3/4 md:w-2/4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow">
                <option className='text-gray-400'>Select Payment Method</option>
                <option>VISA</option>
                <option>APPLE PAY</option>
                <option>MASTERCARD</option>
              </select>
    </div>
  )
}

export default UserPayment