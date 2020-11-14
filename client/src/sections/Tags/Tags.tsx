import { Divider, Layout, List, Tag, Typography } from 'antd';
import { ErrorBanner } from 'lib/components/ErrorBanner';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/modules/combine-reducer';
import { getTags } from 'store/modules/tags/tags.action';
import { TagCard } from './components';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Tags = () => {
  const dispatch = useDispatch();
  const { tags, loading, tag, error } = useSelector((state: RootState) => state.tag);

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  useScrollToTop();

  if (loading) {
    return (
      <>
        <Sidebar />
        <Content className="content tags">
          <PageSkeleton />
        </Content>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Sidebar />
        <Content className="content listings">
          <ErrorBanner description="Tags may not exists or we 've encounted an error. Please try again soon." />
          <PageSkeleton />
        </Content>
      </>
    );
  }

  const tagsSectionElement = (
    <>
      {tags && tags.length > 0 ? (
        <List
          grid={{
            gutter: 16,
            column: 3,
            lg: 2,
            md: 2,
            xs: 1,
          }}
          dataSource={tags}
          renderItem={item => (
            <List.Item key={item.id}>
              <Link to={`/tags/${item.tagname}`}>
                <TagCard tag={item} />
              </Link>
            </List.Item>
          )}
        />
      ) : (
        <div>
          <Paragraph>
            It appears no tags has been found. Be the first person to create a <Link to="/ask">post!</Link>
          </Paragraph>
        </div>
      )}
    </>
  );

  return (
    <>
      <Sidebar />
      <Content className="content tags">
        <div className="tags__header">
          <Title level={3} className="tags__header--title">
            Tags
          </Title>
          <Paragraph type="secondary">
            A tag is a keyword or label that categorizes your question with other, similar questions. Using the right
            tags makes it easier for others to find and answer your question.
          </Paragraph>
          <Tag color="purple">
            {tags.length} Tag
            {tags.length <= 1 ? '' : 's'}
          </Tag>
        </div>
        <Divider />
        {tagsSectionElement}
      </Content>
    </>
  );
};

export default Tags;
