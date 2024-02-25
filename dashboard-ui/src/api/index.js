// apiService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:4000'; // Your API base URL

const apiService = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json'
		// You can add more headers here like authorization token, etc.
	}
});

// Define functions for different API requests
export const fetchUsers = () => {
	return apiService.get('/users');
};

export const createPost = (postData) => {
	return apiService.post('/posts', postData);
};

// Add more functions as needed
