import { Card, Col, Row, Spin, Tag, Typography } from 'antd';
import UserPostCard from 'lib/components/UserPostCard';
import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from 'store/modules/posts/posts.types';

type Props = {
  post: IPost;
};

const { Paragraph, Title } = Typography;
export const PostCard: React.FC<Props> = ({ post }) => {
  const { id, body, title, user, tags, createdAt } = post;

  return (
    <Card className="post__card">
      <Row>
        <Col span={3} className="post__card--stats">
          <Tag color="magenta" className="post__card--stats-vote">
            <span className="vote-count">1</span>
            <div className="count-text">upvotes</div>
          </Tag>
          <Tag color="blue" className="post__card--stats-vote">
            <span className="vote-count">4</span>
            <div className="count-text">answers</div>
          </Tag>
        </Col>
        <Col span={16} className="post__card--body">
          <Link to={`/posts/${id}`}>
            <Title level={4}>{title}</Title>
            <Paragraph
              className="post__card--text"
              ellipsis={{
                rows: 2,
              }} 
            >
              <div dangerouslySetInnerHTML={{ __html: body }}></div>
            </Paragraph>
          </Link>
          <Paragraph className="post__card--tags">
            {tags && tags.length > 0 && tags.map(tag => <Tag key={tag.id}>{tag.tagname}</Tag>)}
          </Paragraph>
        </Col>
        <Col span={5}>
          <UserPostCard user={user} createdAt={createdAt} />
        </Col>
      </Row>
    </Card>
  );
};
