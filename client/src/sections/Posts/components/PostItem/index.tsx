import { Avatar, Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from 'store/modules/posts/posts.types';
import Moment from 'react-moment';
import moment from 'moment';

const { Item } = List;

type Props = {
  post: IPost;
};

const { Paragraph, Title } = Typography;

export const PostItem: React.FC<Props> = ({ post }) => {
  const { id, body, title, user, tags, createdAt, updatedAt } = post;
  return (
    <Card className="post__layout">
      <Row>
        <Col span={3} className="post__layout--stats">
          <div className="upvote">3 votes</div>
          <div className="answers">4 answers</div>
        </Col>
        <Col span={16} className="post__layout--body">
          <Title level={4}>{title}</Title>
          <Paragraph className="post__layout--text">{body}</Paragraph>
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
