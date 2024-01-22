import React from 'react';
import { StyledUserMenuContainer } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';
import {Link} from "react-router-dom"

const UserMenu = ({ onLogOut }) => {
  const user = useSelector(selectAuthUserData);

  return (
    <StyledUserMenuContainer>
      <p className="userEmail">{user.email}</p>
      <Link to='/profile'>Profile</Link>
      <button onClick={onLogOut}>Log Out</button>
    </StyledUserMenuContainer>
  );
};

export default UserMenu;
