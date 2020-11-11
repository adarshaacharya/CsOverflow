import { Button, Card, Col, Divider, Row, Tag, Typography } from 'antd';
import UserPostCard from 'lib/components/UserPostCard';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from 'store/modules/posts/posts.types';

type Props = {
  post: IPost;
};
const { Title, Paragraph, Text } = Typography;

export const PostDetails: React.FC<Props> = ({ post }) => {
  const { id, body, createdAt, tags, title, user } = post;

  return (
    <div className="post-details">
      <Row className="post-details__header" justify="space-between">
        <div>
          <Title level={4} className="post-details__question">
            {title}
          </Title>
          <Paragraph type="secondary">
            asked {moment(createdAt).fromNow()} by {user && <Link to={`/users/${user.id}`}>{user.name}</Link>}
          </Paragraph>
        </div>
        <Button type="primary">Ask Question</Button>
      </Row>
      <Card className="post-details__main">
        <Row>
          <Col span={3} className="post-details__stats">
            <Tag color="magenta" className="post-details__stats--vote">
              <span className="vote-count">1</span>
              <div className="count-text">upvotes</div>
            </Tag>
            <Tag color="blue" className="post-details__stats--vote">
              <span className="vote-count">1</span>
              <div className="count-text">answers</div>
            </Tag>
          </Col>

          <Col span={16} className="post-details__body">
            <Paragraph className="post-details__text">{body}</Paragraph>
            <Paragraph className="post-details__tags">
              {tags.map(tag => (
                <Tag key={tag.id}>
                  <Link to={`/tags/${tag.tagname}`}>{tag.tagname}</Link>
                </Tag>
              ))}
            </Paragraph>
          </Col>
          <Col span={5}>
            <UserPostCard user={user} createdAt={createdAt} />
          </Col>
        </Row>
      </Card>
      <Divider />
    </div>
  );
};
