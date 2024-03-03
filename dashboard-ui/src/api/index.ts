// apiService.js

import axios from 'axios';

interface UserData {
  name: string | null;
  email: string | null;
	id?: number
}
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

export const createUser = (data:UserData) => {
	return apiService.post('/users', data);
};

export const updateUser = (data:UserData) =>{
	console.log(data.id,'data');
	return apiService.put(`/users/${data.id}`,data);
}

export const deleteUser = (data:number) => {
	
	return apiService.delete(`/users/${data}`);
}

// Add more functions as needed
