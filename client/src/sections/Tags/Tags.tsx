import { Layout } from 'antd';
import Sidebar from 'lib/components/Sidebar';
import React from 'react';

const {Content} = Layout
const Tags = () => {
  return (
    <>
      <Sidebar />
      <Content className="tags">
        <h1>TAGS</h1>
      </Content>
    </>
  );
};

export default Tags;
