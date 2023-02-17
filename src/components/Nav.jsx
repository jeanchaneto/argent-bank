import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import mainLogo from '../assets/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Nav = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.authReducer.isAuthenticated);
  const firstName = useSelector((state) => state.authReducer.firstName);

  const logout = () => {
    dispatch(authActions.logout());
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo" >
        <img
          className="main-nav-logo-image"
          src={mainLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {isLoggedIn ? <div>
        <NavLink to="./profile">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </NavLink>
        <NavLink to="./"
          className="main-nav-item"
          onClick={logout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div> : <div>
        <NavLink to="./login"
          className="main-nav-item" >
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>}
    </nav>
  )
}

export default Nav