import React from 'react';
import './card.css';
 interface Props {
  user: string,
  description: string
}
const Card:React.FC<Props> = ({user,description}) => {
  return (
    <div className='container'>
     <div className="cardDetails">
      <input
      className='title input'
      placeholder='User'
      value={user}
      />
      <input
      className='description input'
      placeholder='Email'
      value={description}
      />
      
     </div>
      <div className="buttonContainer">

        <button className='Update'>Update</button>
        <button className='Delete'>Delete</button>
      </div>
    </div>
  )
}

export default Card