import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const registerData = useSelector((state) => state.userRegisterReducer.userInfo);
  console.log('registerData', registerData);
  return (
    <div>
      <h1>Hello {registerData?.name}Welcome to our ecommerce</h1>
    </div>
  );
};

export default HomePage;
