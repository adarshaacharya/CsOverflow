import { Layout } from 'antd';
import Sidebar from 'lib/components/Sidebar';
import React from 'react';
import { CommentCreate, CommentDetails } from './components';

const { Content } = Layout;
const Post = () => {
  return (
    <>
      <Sidebar />
      <Content className="post">
        <CommentDetails />
        <CommentCreate />
      </Content>
    </>
  );
};

export default Post;
