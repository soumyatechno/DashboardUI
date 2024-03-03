import React, { useEffect, useState } from 'react';
import './formstyle.css';
import { createUser, updateUser, deleteUser } from '../../api/index';
import { toast, ToastContainer } from 'react-toastify';
import { User } from '../../module';
interface Props {
	dataFromParent: (data: null) => void;
	fetchUserInfo: () => void;
	userData: any;
}
const Myform: React.FC<Props> = ({ dataFromParent, fetchUserInfo, userData }) => {
	const [formData, setFormData] = useState<User>({ name: '', email: '', id: 0 });
	const [isButtonType, setIsButtonType] = useState<string>('submit');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { name, email, id } = formData;
		if (isButtonType === 'Update') {
			await updateUser({ name, email, id })
				.then((response) => {
					console.log(response);
					toast.success('User is updated Succccessfully');
					fetchUserInfo();
				})
				.catch((error) => {
					console.error('Error fetching posts:', error);
					toast.error('Error in User Data update:');
				});
		}
		if (isButtonType === 'Delete') {
			await createUser({ name, email })
				.then((response) => {
					console.log(response);
					toast.success('User is deleted Succccessfully');
					fetchUserInfo();
				})
				.catch((error) => {
					console.error('Error fetching posts:', error);
					toast.error('Error in user deletion:');
				});
		} else {
			await deleteUser(id)
				.then((response) => {
					console.log(response);
					toast.success('User is created Succccessfully');
					fetchUserInfo();
				})
				.catch((error) => {
					console.error('Error fetching posts:', error);
					toast.error('Error in User creation:');
				});
		}
		setTimeout(() => {
			dataFromParent(null);
		}, 500);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleClose = () => {
		dataFromParent(null);
	};

	useEffect(() => {
		const { name, email, id, type } = userData;

		type === 'Update' ? setIsButtonType('Update') : setIsButtonType('Delete');

		setFormData({ ...formData, name: name, email: email, id: id });
	}, [userData]);

	// console.log(userData, 'data');

	return (
		<div className="form-container">
			{/* <h2> Form</h2> */}
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="Enter your name"
						required
						className="forminput"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						className="forminput"
						value={formData.email}
						onChange={handleInputChange}
						placeholder="Enter your email"
						required
					/>
				</div>
				<div className="btn-container">
					<button type="submit" className="btn">
						{isButtonType}
					</button>
					<button type="button" className="btn" onClick={handleClose}>
						Cancel
					</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Myform;
