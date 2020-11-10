import { Button, Card, Col, Divider, Row, Space, Tag, Typography } from 'antd';
import React from 'react';
import { PostItem } from 'sections/Posts/components';
import { IPost } from 'store/modules/posts/posts.types';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
          <Paragraph type="secondary">asked {moment(createdAt).fromNow()}</Paragraph>
        </div>
        <Button type="primary">Ask Question</Button>
      </Row>
      <Card className="post-details__answer">
        <Row>
          <Col span={3} className="post-deatils__stats">
            <Tag color="magenta" className="post-details__stats--vote">
              <span className="vote-count">1</span>
              <div className="count-text">upvotes</div>
            </Tag>
            <Tag color="blue" className="post-details__stats--vote">
              <span className="vote-count">1</span>
              <div className="count-text">comments</div>
            </Tag>
          </Col>

          <Col span={21} className="post-details__body">
            <Paragraph className="post-details__text">{body}</Paragraph>
            <Paragraph className="post-details__tags">
              {tags.map(tag => (
                <Tag key={tag.id}>{tag.tagname}</Tag>
              ))}
            </Paragraph>
          </Col>
        </Row>
      </Card>
      <Divider />
    </div>
  );
};
