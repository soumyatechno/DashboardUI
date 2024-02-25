import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Test from '../components/test/test';
import UserData from '../components/user/user';
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserData/>} />
        <Route path="test" element={<Test/>} />
      </Routes>
    </div>
  )
}

export default Router