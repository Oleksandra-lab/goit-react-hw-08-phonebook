import React from 'react';
import { StyledUserMenuContainer } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';

const UserMenu = ({ onLogOut }) => {
  const user = useSelector(selectAuthUserData);

  return (
    <StyledUserMenuContainer>
      <p className="userEmail">{user.email}</p>
      <button onClick={onLogOut}>Log Out</button>
    </StyledUserMenuContainer>
  );
};

export default UserMenu;
