import { FileOutlined, HomeOutlined, LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Item } = Menu;

export const MenuItems = () => {
  return (
    <Menu mode="inline" defaultSelectedKeys={['home']} className="sidebar__menu-items">
      <Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <Item key="posts" icon={<FileOutlined />}>
        <Link to="/posts">Posts</Link>
      </Item>
      <Item key="tags" icon={<LaptopOutlined />}>
        <Link to="/tags">Tags</Link>
      </Item>
      <Item key="users" icon={<UserOutlined />}>
        <Link to="/users">Users</Link>
      </Item>
    </Menu>
  );
};
