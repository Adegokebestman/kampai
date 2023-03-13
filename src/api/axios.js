import axios from 'axios';

export default axios.create({
	baseURL: 'https://kampai-backend.onrender.com',
});

const BaseUrl = 'https://kampai-backend.onrender.com';

function getOptionsWithToken(token) {
	const options = {
		headers: { Authorization: `Bearer ${token}` },
	};
	return options;
}

const PENDING_ORDERS = '/orders/getPendingOrders';
const MODIFIED_ORDERS = '/orders/getModifiedOrders';
const ALL_ORDERS = '/orders/getAllOrders';
const UNREAD_MESSAGES = '/messages/getUnreadMessages';
const USER_INFO = '/users/getUserInfo';
const READ_NOTIFICATION = '/notifications/readNotification';
const NOTIFICATION_COUNT = '/notifications/getNotifications';
const ALL_PRODUCTS = '/products/getAllProducts';
const SINGLE_PRODUCT = '/products/getProduct/';

export const getAllProducts = async (token) => {
	try {
		const res = await axios.get(
			BaseUrl + ALL_PRODUCTS,
			getOptionsWithToken(token)
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getSingleProduct = async (token, productId) => {
	try {
		const res = await axios.get(
			BaseUrl + SINGLE_PRODUCT + productId,
			getOptionsWithToken(token)
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getAllOrders = async (token) => {
	try {
		const res = await axios.get(
			BaseUrl + ALL_ORDERS,
			getOptionsWithToken(token)
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getModifiedOrders = async (token) => {
	try {
		const res = await axios.get(
			BaseUrl + MODIFIED_ORDERS,
			getOptionsWithToken(token)
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getPendingOrder = async (token) => {
	try {
		const res = await axios.get(
			BaseUrl + PENDING_ORDERS,
			getOptionsWithToken(token)
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getUnreadMessages = async (token) => {
	try {
		const res = await axios.get(
			BaseUrl + UNREAD_MESSAGES,
			getOptionsWithToken(token)
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getUserInfo = async (token) => {
	try {
		const res = await axios.get(
			BaseUrl + USER_INFO,
			getOptionsWithToken(token)
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getReadNotification = async (token) => {
	try {
		const res = await axios.get(
			BaseUrl + READ_NOTIFICATION,
			getOptionsWithToken(token)
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
export const getReadNotificationCount = async (token) => {
	try {
		const res = await axios.get(
			BaseUrl + NOTIFICATION_COUNT,
			getOptionsWithToken(token)
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
