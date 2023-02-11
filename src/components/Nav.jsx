import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import mainLogo from '../assets/argentBankLogo.png';

const Nav = () => {
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
      {/* TO DO */}
      <div>
        <NavLink to="./login" className="main-nav-item" >
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
      {/* TO DO */}
      {/* <div>
        <a className="main-nav-item" href="./user.html">
          <i className="fa fa-user-circle"></i>
          Tony
        </a>
        <a className="main-nav-item" href="./index.html">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div> */}
    </nav>
  )
}

export default Nav