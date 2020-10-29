import { Button, Menu } from 'antd';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const { Item } = Menu;

export const MenuItems = () => {
  return (
    <Menu mode="horizontal" selectable={false} className="menu">
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
    </Menu>
  );
};
