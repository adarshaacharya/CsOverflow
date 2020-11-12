import { Divider, Layout, Typography } from 'antd';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React from 'react';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Tags = () => {
  useScrollToTop();

  const tagsSectionElement = <></>;
  return (
    <>
      <Sidebar />
      <Content className="tags">
        <div className="tags__header">
          <Title level={3} className="tags__header--title">
            Tags
          </Title>
          <Paragraph type="secondary">
            A tag is a keyword or label that categorizes your question with other, similar questions. Using the right
            tags makes it easier for others to find and answer your question.
          </Paragraph>
        </div>
        <Divider />
        {tagsSectionElement}
      </Content>
    </>
  );
};

export default Tags;
