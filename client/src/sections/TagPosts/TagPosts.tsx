import { Button, Divider, Layout, Row, Tag, Typography } from 'antd';
import { ErrorBanner } from 'lib/components/ErrorBanner';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import { PostCard } from 'lib/components/PostCard';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from 'store/modules/combine-reducer';
import { getTagPosts } from 'store/modules/posts/posts.actions';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface Params {
  tagname: string;
}

const TagPosts = () => {
  const dispatch = useDispatch();
  const { tagname } = useParams<Params>();

  const { posts, loading, error } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (tagname) {
      dispatch(getTagPosts(tagname));
    }
  }, [dispatch, tagname]);

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

  const tagPostsElement = (
    <>
      {posts.length < 1 ? (
        <Paragraph>It appears no questions has been asked with tag {tagname}. Be first one to create it.</Paragraph>
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
      <Content className="content tag-posts">
        <Row justify="space-between" className="tag-posts__header">
          <Title level={3} className="tag-posts__header--title">
            Questions Tagged [{tagname}]
          </Title>
          <Button type="primary">
            <Link to="/ask">Ask Question</Link>
          </Button>
        </Row>
        <Tag color="purple">
          {posts.length} Question
          {posts.length <= 1 ? '' : 's'}
        </Tag>
        <Divider />
        {tagPostsElement}
      </Content>
    </>
  );
};

export default TagPosts;
