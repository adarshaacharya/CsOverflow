import { Button, Divider, Layout, Row, Tag, Typography } from 'antd';
import { ErrorBanner } from 'lib/components/ErrorBanner';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import { PostCard } from 'lib/components/PostCard';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/modules/combine-reducer';
import { getPosts } from 'store/modules/posts/posts.actions';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Posts = () => {
  const dispatch = useDispatch();

  const { posts, loading, error } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useScrollToTop();

  if (loading) {
    return (
      <>
        <Sidebar />
        <Content className="content posts">
          <PageSkeleton />
        </Content>
      </>
    );
  }

  if (error) {
    return (
      <Content className="content posts">
        <ErrorBanner description="Posts may not exist or we 've encounted an error. Please try again soon." />
        <PageSkeleton />
      </Content>
    );
  }

  const postsSectionElement = (
    <>
      {posts.length < 1 ? (
        <Paragraph>It appears no questions has been asked. Be first one to create it.</Paragraph>
      ) : (
        posts.map(post => (
          <div className="post" key={`${post.id}`}>
            {post && <PostCard post={post} />}
          </div>
        ))
      )}
    </>
  );

  return (
    <>
      <Sidebar />
      <Content className="content posts">
        <Row justify="space-between" className="posts__header">
          <Title level={3} className="posts__title">
            All Questions
          </Title>
          <Button type="primary">
            <Link to="/ask">Ask Question</Link>
          </Button>
        </Row>
        <Paragraph type="secondary">
          Explore all the questions and help us to answer unanswered questions. You can choose the category of questions
          by exploring on
          <Link to="/tags"> tags section.</Link>
        </Paragraph>
        <Tag color="purple">
          {posts.length} Question
          {posts.length <= 1 ? '' : 's'}
        </Tag>
        <Divider />
        {postsSectionElement}
      </Content>
    </>
  );
};

export default Posts;
