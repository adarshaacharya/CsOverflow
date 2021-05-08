import { FileOutlined, HomeOutlined, LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: 'Home',
    path: '/',
    icon: <HomeOutlined />,
  },
  {
    key: '2',
    label: 'Posts',
    path: '/posts',
    icon: <FileOutlined />,
  },
  {
    key: '3',
    label: 'Tags',
    path: '/tags',
    icon: <LaptopOutlined />,
  },
  {
    key: '4',
    label: 'Users',
    path: '/users',
    icon: <UserOutlined />,
  },
];

export const MenuItems = () => {
  const location = useLocation();
  const history = useHistory();

  const [current, setCurrent] = useState(items.find(_item => location.pathname === _item.path)?.key); // stores current path key

  // change page route
  const onMenuClick = (item: any) => {
    const clicked = items.find(_item => _item.key === item.key);
    history.push(clicked?.path as string);
  };

  useEffect(() => {
    setCurrent(items.find(_item => location.pathname === _item.path)?.key); // change key on location change
  }, [location]);

  // gotcha for single snippet
  useEffect(() => {
    if (location.pathname.startsWith('/posts')) {
      setCurrent('2');
    }
    if (location.pathname.startsWith('/tags')) {
      setCurrent('3');
    }
    if (location.pathname.startsWith('/users')) {
      setCurrent('4');
    }
  }, [location]);

  return (
    <Menu mode="inline" selectedKeys={[current!]} onClick={onMenuClick} className="sidebar__menu-items">
      {items.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};
