import { Button, Divider, Layout, Row, Typography } from 'antd';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React from 'react';
import { PostItem } from './components';

const { Content } = Layout;
const { Title } = Typography;
const Posts = () => {
  useScrollToTop();

  const postsSectionElement = (
    <>
      <PostItem />
    </>
  );

  return (
    <>
      <Sidebar />
      <Content className="posts">
        <Row justify="space-between">
          <Title level={3} className="posts__title">
            Top Questions
          </Title>
          <Button type="primary">Ask Question</Button>
        </Row>

        <Divider />
        {postsSectionElement}
      </Content>
    </>
  );
};

export default Posts;
