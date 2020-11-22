import * as React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/logo1.png';

export const Logo = () => {
  return (
    <NavLink to="/">
      <img src={logo} alt="app logo" />
    </NavLink>
  );
};
