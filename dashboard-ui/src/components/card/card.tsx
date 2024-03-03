import React from 'react';
import './card.css';
import { UserAction } from '../../module';
interface Props {
	user: string;
	description: string;
	id: number;
	onUpdate: (data: UserAction) => any;
	onDelete: (data: UserAction) => any;
}
const Card: React.FC<Props> = ({ user, description, onUpdate, id, onDelete }) => {
	return (
		<div className="container">
			<div className="cardDetails">
				<p className="">{user}</p>
				<p className="">{description}</p>
			</div>
			<div className="buttonContainer">
				<button
					className="Update"
					onClick={() => onUpdate({ name: user, email: description, id, type: 'Update' })}
				>
					Update
				</button>
				<button
					className="Delete"
					onClick={() => onDelete({ name: user, email: description, id, type: 'Delete' })}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Card;
