import { HomeOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

const { Item } = Menu;


export const MenuItems = () => {
  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      <Item key="/host">
        <Link to="/host">
          <HomeOutlined />
          Home
        </Link>
      </Item> 

      <Item key="/login">
        <Link to="/login">
          <Button type="primary">Sign In</Button>
        </Link>
      </Item>
    </Menu>
  );
};
