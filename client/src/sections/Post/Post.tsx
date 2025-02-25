import { Divider, Layout } from 'antd';
import { ErrorBanner } from 'lib/components/ErrorBanner';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import { useAppSelector, useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from 'store/modules/posts/posts.actions';
import { PostAnswerDetails, PostCreateAnswer, PostDetails } from './components';

const { Content } = Layout;
const Post = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const { loading, post, error } = useAppSelector(state => state.post);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  useScrollToTop();

  if (loading && !post) {
    return (
      <>
        <Sidebar />
        <Content className="content post-wrapper">
          <PageSkeleton />
        </Content>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Sidebar />
        <Content className="content post-wrapper">
          <ErrorBanner description="We've encountered an error. Please refresh the page." />
          <PageSkeleton />
        </Content>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <Content className="content post-wrapper">
        {post && <PostDetails post={post} />}
        <PostAnswerDetails />
        <Divider />
        <PostCreateAnswer />
      </Content>
    </>
  );
};

export default Post;
