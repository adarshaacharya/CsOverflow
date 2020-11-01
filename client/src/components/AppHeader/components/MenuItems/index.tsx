import { HomeOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from 'store/modules/combine-reducer';

const { Item } = Menu;

export const MenuItems = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const publicLinks = (
    <>
      <Item key="/home">
        <NavLink to="/">
          <HomeOutlined />
          Home
        </NavLink>
      </Item>
      <Item key="/signup">
        <NavLink to="/signup" activeClassName="active">
          <Button type="primary" size="large">
            Sign up
          </Button>
        </NavLink>
      </Item>

      <Item key="/login">
        <NavLink to="/login" activeClassName="active">
          <Button size="large">Login</Button>
        </NavLink>
      </Item>
    </>
  );

  const privateLinks = (
    <>
      <Item key="/home">
        <NavLink to="/">
          <HomeOutlined />
          Home
        </NavLink>
      </Item>
    </>
  );


  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      {isAuthenticated ? privateLinks : publicLinks}
    </Menu>
  );
};
