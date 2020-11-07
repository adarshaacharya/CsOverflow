import { Layout } from 'antd';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React from 'react';

const { Content } = Layout;
const Posts = () => {
  useScrollToTop();

  const postsSectionElement = (
      <div></div>
  )
  return (
    <>
      <Sidebar />
      <Content className="posts">
          {postsSectionElement}
      </Content>
    </>
  );
};

export default Posts;
