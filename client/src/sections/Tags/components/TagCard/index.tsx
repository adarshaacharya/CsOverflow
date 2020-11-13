import { Card, Row, Tag, Typography } from 'antd';
import React from 'react';
import { ITag } from 'store/modules/tags/tags.types';
type Props = {
  tag: ITag;
};

const { Paragraph } = Typography;
export const TagCard: React.FC<Props> = ({ tag }) => {
  const { tagname } = tag;
  return (
    <Card className="tags__tag-card">
      <Tag color="purple">{tagname}</Tag>

      <div className="tags__tag-caption">
        <Paragraph type="secondary">3 questions</Paragraph>
        <Paragraph type="secondary"> added a month ago</Paragraph>
      </div>
    </Card>
  );
};
