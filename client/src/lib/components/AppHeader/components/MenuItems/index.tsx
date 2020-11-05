import { HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Menu, Space } from 'antd';
import SkeletonButton from 'antd/lib/skeleton/Button';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'store/modules/auth/auth.actions';
import { RootState } from 'store/modules/combine-reducer';
import { displaySuccessNotification } from 'utils';

const { Item, SubMenu } = Menu;

export const MenuItems = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<any>();

  const handleLogout = async () => {
    await dispatch(logOut());
    displaySuccessNotification("You've successfully logged out!");
  };

  const _subMenuLogin = (
    <>
      {user?.id && user.avatar && (
        <SubMenu title={<Avatar src={user.avatar} />}>
          <Item key="/user">
            <NavLink to={`/user/${user.id}`}>
              <UserOutlined></UserOutlined>
              Profile
            </NavLink>
          </Item>
          <Item key="/logout" onClick={handleLogout}>
            <LogoutOutlined></LogoutOutlined>
            Log out
          </Item>
        </SubMenu>
      )}
    </>
  );

  const publicLinks = (
    <>
      <Item key="/home">
        <NavLink to="/" activeClassName="app-header__menu-section--active">
          <HomeOutlined />
          Home
        </NavLink>
      </Item>

      <Item key="/login">
        <NavLink to="/login" activeClassName="app-header__menu-section--active">
          <Button type="primary">Login</Button>
        </NavLink>
      </Item>
      <Item key="/signup">
        <NavLink to="/signup" activeClassName="app-header__menu-section--active">
          <Button>Sign up</Button>
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
