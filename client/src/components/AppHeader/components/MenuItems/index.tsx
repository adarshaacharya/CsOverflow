import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Menu } from 'antd';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from 'store/modules/combine-reducer';

const { Item, SubMenu } = Menu;

export const MenuItems = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => console.log('Successfully logged out');

  const _subMenuLogin = (
    <>
      {user?.id && user.avatar && (
        <SubMenu title={<Avatar src={user.avatar} />}>
          <Item key="/user">
            <NavLink to={`${user.id}`}>
              <UserOutlined></UserOutlined>
              Profile
            </NavLink>
          </Item>
          <Item key="/logout" onClick={handleLogout}>
            <LogoutOutlined></LogoutOutlined>
            Profile
          </Item>
        </SubMenu>
      )}
    </>
  );

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
          <Button type="primary">Sign up</Button>
        </NavLink>
      </Item>

      <Item key="/login">
        <NavLink to="/login" activeClassName="active">
          <Button>Login</Button>
        </NavLink>
      </Item>
    </>
  );

  const _privateLinks = (
    <>
      <Item key="/home">
        <NavLink to="/">
          <HomeOutlined />
          Home
        </NavLink>
      </Item>
      {_subMenuLogin}
    </>
  );

  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      {isAuthenticated ? _privateLinks : publicLinks}
    </Menu>
  );
};
