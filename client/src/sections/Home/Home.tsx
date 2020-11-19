import { Button, Divider, Layout, List, Row, Typography } from 'antd';
import { ErrorBanner } from 'lib/components/ErrorBanner';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import { PostCard } from 'lib/components/PostCard';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/modules/combine-reducer';
import { getTopPosts } from 'store/modules/posts/posts.actions';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();
  const { error, loading, posts } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(getTopPosts());
  }, [dispatch]);

  useScrollToTop();

  if (loading) {
    return (
      <>
        <Sidebar />
        <Content className="content home">
          <PageSkeleton />
        </Content>
      </>
    );
  }

  if (error) {
    return (
      <Content className="content home">
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
          <div className="post" id={`${post.id}`}>
            {post && post.user && <PostCard post={post} />}
          </div>
        ))
      )}
    </>
  );

  return (
    <>
      <Sidebar />
      <Content className="content home">
        <div className="home__header">
          <Row justify="space-between">
            <Title level={3} className="home__title">
              Top Questions
            </Title>
            <Button type="primary">
              <Link to="/ask">Ask Question</Link>
            </Button>
          </Row>

          <Paragraph type="secondary">
            Top questions are displayed based on the performance and the interactivity of posts. If you want to view all
            questions
            <Link to="/posts"> click here !</Link>
          </Paragraph>
        </div>

        <Divider />
        {postsSectionElement}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="link">
            <Link to="/posts">View all posts</Link>
          </Button>
        </div>
      </Content>
    </>
  );
};

export default Home;
