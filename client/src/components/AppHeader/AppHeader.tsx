import { Layout } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/csoverflow-logo.png';
import { MenuItems, Searchbar } from './components';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="app-header">
      <div className="app-header__logo-search-section">
        <div className="app-header__logo">
          <NavLink to="/">
            <img src={logo} alt="app logo" />
          </NavLink>
        </div>
        <div className="app-header__search-input">
          <Searchbar />
        </div>
      </div>

      <div className="app-header__menu-section">
        <MenuItems />
      </div>
    </Header>
  );
};

export default AppHeader;
