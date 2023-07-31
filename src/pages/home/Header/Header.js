import React, { useEffect } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import useProductContext from '../../../hooks/useProductContext';
import AvatarImg from '../../../assets/avatar.png';

const Header = () => {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useProductContext();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]); // setLoggedIn is a dependency of useEffect

  const onHeaderLogin = () => {
    navigate('/login');
  };

  const logoutHeader = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  const onHeaderSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="header">
      <span>Feedback</span>
      {loggedIn ? (
        <div className="header__loggedIn">
          <button className="header__logout__button" onClick={logoutHeader}>
            Logout
          </button>
          <span>Hello! </span>
          <img src={AvatarImg} alt="user" />
        </div>
      ) : (
        <div className="header__buttons">
          <button className="header__login__button" onClick={onHeaderLogin}>
            Login
          </button>
          <button className="header__signup__button" onClick={onHeaderSignup}>
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
