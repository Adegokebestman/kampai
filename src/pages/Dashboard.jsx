import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FaEdit } from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';
import { useStateContext } from '../contexts/ContextProvider';
import {
	earningData,
	SparklineAreaData,
	ecomPieChartData,
} from '../data/dummy';
import { Button } from '../components';
import { useEffect, useState } from 'react';

import {
	getPendingOrder,
	getModifiedOrders,
	getReadNotification,
	getUnreadMessages,
	getUserInfo,
} from '../api/axios';

const Dashboard = () => {
	const [pendingOrders, setPendingOrders] = useState('');
	const [unReadMessages, setUnReadMessages] = useState('');
	const [modifiedOrders, setModifiedOrders] = useState('');
	const [userInfo, setUserInfo] = useState('');
	const [readNotification, setReadNotification] = useState('');

	useEffect(async () => {
		const accessToken = localStorage.getItem('accessToken');

		let mounted = true;
		if (mounted) {
			const pOrder = await getPendingOrder(accessToken);
			const unreadMes = await getUnreadMessages(accessToken);
			const modOrder = await getModifiedOrders(accessToken);
			const userIn = await getUserInfo(accessToken);
			const readNot = await getReadNotification(accessToken);
			setPendingOrders(pOrder.pendingOrders);
			setUnReadMessages(unreadMes.unreadmessages);
			setModifiedOrders(modOrder.modifiedOrders);
			setUserInfo(userIn.userInfo.name);
			setReadNotification(readNot);

			console.log({ userInfo, readNotification });
		}
		return () => {
			mounted = false;
		};
	}, []);

	return (
		<div className='mt-20 md:12'>
			<div className='flex flex-wrap lg:flex-nowrap justify-center'>
				<div className='bg-white boxShadow hero dark:text-gray-200 dark:bg-secondary-dark-bg h-22 rounded-xl w-80 lg:w-11/12 p-8 pt-9 m-3 '>
					<div className='flex font-semibold justify-between items-center'>
						<p className='font-bold text-xl md:text-2xl'>
							{' '}
							Welcome, {userInfo}
						</p>

						<div>
							<Link to='/Inventory'>
								<Button
									color='white'
									bgColor='#FF7E20'
									text='CHECK YOUR INVENTORY'
									borderRadius='10px'
								/>
							</Link>
						</div>
					</div>
					{/* button */}
					{/* <div className='mt-6'>
<Button color="white" bgColor="#FF7E20" text="Download" borderRadius="10px" />
  </div> */}
				</div>
			</div>
			<div className='flex m-3 flex-wrap dashboard justify-center gap-4 items-center md:gap-20'>
				<div className='bg-white text-center dashboard-content boxShadow dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72 h-40  p-4 pt-2 rounded-2xl md:pt-20 md:h-72'>
					<button
						type='button'
						style={{ color: '#34A853', backgroundColor: '#EDFBED' }}
						className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
					>
						<BsBoxSeam />
					</button>
					<p className='mt-3'>
						<span className='text-2xl font-semibold'>
							{pendingOrders}
						</span>
					</p>
					<span className={`text-sm`}>Pending Orders</span>
				</div>

				<div className='bg-white text-center dashboard-content boxShadow dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72 h-40  p-4 pt-2 rounded-2xl md:pt-20 md:h-72'>
					<button
						type='button'
						style={{ color: '#9747FF', backgroundColor: '#E8DAFB' }}
						className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
					>
						<FiMail />
					</button>
					<p className='mt-3'>
						<span className='text-2xl font-semibold'>
							{unReadMessages}
						</span>
					</p>
					<span className={`text-sm`}>Unread Messages</span>
				</div>

				<div className='bg-white text-center dashboard-content boxShadow dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72 h-40  p-4 pt-2 rounded-2xl md:pt-20 md:h-72'>
					<button
						type='button'
						style={{ color: '#EF3838', backgroundColor: '#FDE6E6' }}
						className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
					>
						<FaEdit />
					</button>
					<p className='mt-3'>
						<span className='text-2xl font-semibold'>
							{modifiedOrders}
						</span>
					</p>
					<span className={`text-sm`}>Modified Orders</span>
				</div>
			</div>
			<div className='flex justify-end float-right font-semibold rounded-full mt-8 mr-16 pr-10 bg-white boxShadow items-center'>
				<BiCurrentLocation className='text-4xl m-8 text-[#FF7E20]' />

				<div>
					<Link to='../Myorder'>
						<Button
							className='m-12 text-xl '
							color='white'
							bgColor='#FF7E20'
							text=' Track Order'
							borderRadius='10px'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
