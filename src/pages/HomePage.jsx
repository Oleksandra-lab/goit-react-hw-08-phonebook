import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAuthAuthenticated,
  selectAuthUserData,
} from 'redux/auth.selectors';

const HomePage = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const user = useSelector(selectAuthUserData);
  return (
    <div>
      {authenticated ? (
        <>Hi, {user.name}! Welcome to your phonebook.</>
      ) : (
        <>
          Hello! I'm your phonebook. Please log in to your account or register.
        </>
      )}
    </div>
  
  );
};

export default HomePage;
