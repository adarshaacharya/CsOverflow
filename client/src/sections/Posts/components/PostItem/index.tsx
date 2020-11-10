import { Avatar, Card, Col, Row, Tag, Typography } from 'antd';
import moment from 'moment';
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
    <Card hoverable className="post__layout">
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
            <Paragraph className="post__layout--text">{body}</Paragraph>
          </Link>
          <Paragraph className="post__layout--tags">
            {tags.map(tag => (
              <Tag key={tag.id}>{tag.tagname}</Tag>
            ))}
          </Paragraph>
        </Col>
        <Col span={5}>
          <Card className="post__layout--user">
            <Avatar src={user.avatar} className="post__layout--user-avatar" />
            <Paragraph type="secondary">{user.name}</Paragraph>
            <Paragraph type="secondary">asked {moment(createdAt).fromNow()}</Paragraph>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};
