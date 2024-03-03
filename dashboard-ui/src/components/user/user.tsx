import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import { User } from '../../module';
import { fetchUsers } from '../../api/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import Myform from '../form/form';
const UserData: React.FC = () => {
	const [userData, setUserData] = useState<User[]>([]);
	const [showForm, setShowForm] = useState<boolean>(false);
	const [updateData, setUpdateData] = useState<User>({ name: '', email: '', id: 0 });

	// to fetch users
	async function fetchUserInfo() {
		await fetchUsers()
			.then((response) => {
				setUserData(response.data);
			})
			.catch((error) => {
				console.error('Error fetching posts:', error);
				toast.error('Error fetching userdata:');
			});
	}

	// show or hide form
	const handleFormShow = () => {
		setUpdateData({ name: '', email: '', id: 0 });
		setShowForm(!showForm);
	};

	const handleCancel = (data) => {
		if (data === null) setShowForm(!showForm);
	};

	const handleFormData = (data) => {
		console.log(data, 'data');
		scrollToTop();
		setUpdateData(data);
		setShowForm(!showForm);
	};

	// to call fetch User function
	useEffect(() => {
		fetchUserInfo();
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth' // Optional, adds smooth scrolling effect
		});
	};

	return (
		<div className="user">
			{showForm ? (
				<Myform
					dataFromParent={handleCancel}
					fetchUserInfo={fetchUserInfo}
					userData={updateData}
					// userData={handleSubmit}
				/>
			) : null}

			<button className="addUser" onClick={handleFormShow}>
				{showForm ? 'Remove New User' : 'Add New User'}
			</button>
			<div className="userData">
				{userData?.length <= 1 ? (
					<Spinner></Spinner>
				) : (
					userData.map((data) => (
						<Card
							key={data.id}
							id={data.id}
							user={data.name}
							description={data.email}
							onUpdate={handleFormData}
							onDelete={handleFormData}
						/>
					))
				)}
			</div>

			<ToastContainer />
		</div>
	);
};

export default UserData;
