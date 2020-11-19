import { Card, Tag, Typography } from 'antd';
import moment from 'moment';
import React from 'react';
import { ITag } from 'store/modules/tags/tags.types';

type Props = {
  tag: ITag;
};

const { Paragraph } = Typography;
export const TagCard: React.FC<Props> = ({ tag }) => {
  const { tagname, createdAt } = tag;
  return (
    <Card className="tags__tag-card">
      <Tag color="purple">{tagname}</Tag>

      <div className="tags__tag-caption">
        <Paragraph type="secondary">{tag.posts.length} questions</Paragraph>
        <Paragraph type="secondary">added {moment(createdAt).fromNow()}</Paragraph>
      </div>
    </Card>
  );
};
