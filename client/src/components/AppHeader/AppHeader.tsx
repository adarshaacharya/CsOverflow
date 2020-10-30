import { Layout } from 'antd';
import React from 'react';
import { MenuItems, Searchbar, Logo } from './components';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="app-header">
      <div className="app-header__logo-search-section">
        <div className="app-header__logo">
          <Logo />
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
