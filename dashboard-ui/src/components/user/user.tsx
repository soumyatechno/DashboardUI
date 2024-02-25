import React,{useState,useEffect} from 'react';
import Card from '../card/card';
import { User } from '../../module';
import { fetchUsers } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
const UserData:React.FC = () => {
  const [userData,setUserData] = useState<User[]>([])
  const [showForm,setShowForm] = useState<boolean>(false) 
  const [name,setName] = useState<string>("")
  const [email,setEmail] = useState<string>("")

  // to fetch users
  async function fetchUserInfo  () {
    await fetchUsers()
    .then(response => {
      setUserData(response.data);
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
        toast.error('Error fetching userdata:')
    });
  }

  // show or hide form
  const handleFormShow = () => {
    console.log("clicked");
    setShowForm(!showForm);
  }

  // to call fetch User function 
  useEffect(()=>{
    fetchUserInfo();
  },[]);
  return (
  <div className='user'>
    {showForm 
    ? ( <div className='form'>
      <h1>hey there </h1>
      {/* <input type="text" value={name} onChange={(e)=> setName(e.target.value)}>username</input>
      <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}>email</input>
      <button className='submit'>submit</button>
      <button className='cancel'>cancel</button> */}
    </div>)
    : null
    }
   
     <button className='addUser' onClick={handleFormShow}>Add User</button>
    {userData?.length <= 1 
  ?  <Spinner >
    <span> ...loading</span>
  </Spinner>   
  :  userData.map((data)=><Card key={data.id} user={data.name} description={data.email} />)
  }
  
  <ToastContainer/>
  </div>
  )

}

export default UserData;