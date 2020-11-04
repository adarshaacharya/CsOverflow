import { Layout } from 'antd';
import React from 'react';
import MenuItems from './components/MenuItems';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} theme="light" className="side-bar" breakpoint={'lg'} collapsedWidth={0} trigger={null}>
      <div className="sidebar__menu-section">
        <MenuItems />
      </div>
    </Sider>
  );
};

export default Sidebar;
