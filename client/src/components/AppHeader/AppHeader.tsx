import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/csoverflow-logo.png';
import { MenuItems, Searchbar } from './components';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="app-header">
      <div className="app-header__logo-search-section">
        <div className="app-header__logo">
          <Link to="/">
            <img src={logo} alt="app logo" />
          </Link>
        </div>
        <Searchbar />
      </div>

      <div className="app-header__menu-section">
        <MenuItems />
      </div>
    </Header>
  );
};

export default AppHeader;
