import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Menu, Avatar } from 'antd';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IUser } from 'store/modules/auth/auth.types';
import { RootState } from 'store/modules/combine-reducer';

const { Item, SubMenu } = Menu;

export const MenuItems = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => console.log('Successfully logged out');

  const subMenuLogin = (
    <>
      <SubMenu
        title={<Avatar src="https://lh3.googleusercontent.com/a-/AOh14Gjfpooh7yoUV-1f5OO3mx6Iky00GXDEJL7V80Gq=s100" />}
      >
        <Item key="/user">
          <NavLink to={`/user/1`}>
            <UserOutlined></UserOutlined>
            Profile
          </NavLink>
        </Item>
        <Item key="/logout" onClick={handleLogout}>
          <LogoutOutlined></LogoutOutlined>
          Profile
        </Item>
      </SubMenu>
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

  const privateLinks = (
    <>
      <Item key="/home">
        <NavLink to="/">
          <HomeOutlined />
          Home
        </NavLink>
      </Item>
      {subMenuLogin}
    </>
  );

  return (
    <Menu mode="horizontal" selectable={false} className="menu">
      {isAuthenticated ? privateLinks : publicLinks}
    </Menu>
  );
};
