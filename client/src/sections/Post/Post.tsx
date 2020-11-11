import { Divider, Layout } from 'antd';
import { ErrorBanner } from 'lib/components/ErrorBanner';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnswers } from 'store/modules/answers/answers.actions';
import { RootState } from 'store/modules/combine-reducer';
import { getPostById } from 'store/modules/posts/posts.actions';
import { AnswerCreate, AnswerDetails, PostDetails } from './components';

const { Content } = Layout;
const Post = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const { loading, post, error } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  useScrollToTop();
  if (loading) {
    return (
      <>
        <Sidebar />
        <Content className="post-wrapper">
          <PageSkeleton />
        </Content>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Sidebar />
        <Content className="post-wrapper">
          <ErrorBanner description="This post may not exists we've encountered an error. Please try again later" />
          <PageSkeleton />
        </Content>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <Content className="post-wrapper">
        {post && <PostDetails post={post} />}
        <AnswerDetails />
        <Divider />
        <AnswerCreate />
      </Content>
    </>
  );
};

export default Post;
