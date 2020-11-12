import { Card, Col, Row, Spin, Tag, Typography } from 'antd';
import UserPostCard from 'lib/components/UserPostCard';
import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from 'store/modules/posts/posts.types';

type Props = {
  post: IPost;
};

const { Paragraph, Title } = Typography;

export const PostItem: React.FC<Props> = ({ post }) => {
  const { id, body, title, user, tags, createdAt } = post;

 

  return (
    <Card className="post__layout">
      <Row>
        <Col span={3} className="post__layout--stats">
          <Tag color="magenta" className="post__layout--stats-vote">
            <span className="vote-count">1</span>
            <div className="count-text">upvotes</div>
          </Tag>
          <Tag color="blue" className="post__layout--stats-vote">
            <span className="vote-count">4</span>
            <div className="count-text">answers</div>
          </Tag>
        </Col>
        <Col span={16} className="post__layout--body">
          <Link to={`/posts/${id}`}>
            <Title level={4}>{title}</Title>
            <Paragraph
              className="post__layout--text"
              ellipsis={{
                rows: 2,
              }}
            >
              {body}
            </Paragraph>
          </Link>
          <Paragraph className="post__layout--tags">
            {tags && tags.map(tag => <Tag key={tag.id}>{tag.tagname}</Tag>)}
          </Paragraph>
        </Col>
        <Col span={5}>
          <UserPostCard user={user} createdAt={createdAt} />
        </Col>
      </Row>
    </Card>
  );
};
