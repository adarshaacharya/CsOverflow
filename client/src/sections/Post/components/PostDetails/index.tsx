import { CommentOutlined, DeleteOutlined, EditOutlined, LikeOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, message, Popconfirm, Row, Space, Tag, Tooltip, Typography } from 'antd';
import UserPostCard from 'lib/components/UserPostCard';
import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from 'store/modules/combine-reducer';
import { deletePost } from 'store/modules/posts/posts.actions';
import { IPost } from 'store/modules/posts/posts.types';

type Props = {
  post: IPost;
};

type Params = {
  id: string;
};

const { Title, Paragraph } = Typography;

export const PostDetails: React.FC<Props> = ({ post }) => {
  const { body, createdAt, tags, title, user } = post;
  const { id } = useParams<Params>();

  const dispatch = useDispatch();
  const { auth, answer } = useSelector((state: RootState) => state);

  function confirm() {
    dispatch(deletePost(id));
  }

  function handleLike() {
    message.success('post liked');
  }

  const viewerIsUser = user && user.id === auth.user?.id;

  const postActionsElement = (
    <Space className="post-details__actions" size="middle">
      <Tooltip key="like" title="Like" className="like">
        <span onClick={handleLike}>
          <LikeOutlined />
          <span className="like-count">2 upvotes</span>
        </span>
      </Tooltip>

      {viewerIsUser ? (
        <Popconfirm title="Are you sure to delete this question?" onConfirm={confirm} okText="Yes" cancelText="No">
          <Button type="link" className="delete">
            <DeleteOutlined />
            Delete
          </Button>
        </Popconfirm>
      ) : null}
      {viewerIsUser ? (
        <Link to={`/posts/${id}/edit`}>
          <Button type="link" className="edit">
            <EditOutlined />
            Edit
          </Button>
        </Link>
      ) : null}
      <Tooltip title="Comment" key="comment" className="comment">
        <CommentOutlined />
        <span className="comments-count">{answer?.answers} answers</span>
      </Tooltip>
    </Space>
  );

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
        <Button type="primary">
          <Link to="/ask">Ask Question</Link>
        </Button>
      </Row>
      <Card className="post-details__main">
        <Row>
          <Col span={2} className="post-details__stats">
            <Tag color="magenta" className="post-details__stats--vote">
              <span className="vote-count">{3}</span>
              <div className="count-text">upvotes</div>
            </Tag>
            <Tag color="blue" className="post-details__stats--vote">
              <span className="vote-count">{answer?.answers.length}</span>
              <div className="count-text">answers</div>
            </Tag>
          </Col>

          <Col span={16} className="post-details__body">
            <p className="post-details__text" dangerouslySetInnerHTML={{ __html: body }}></p>
            <Paragraph className="post-details__tags">
              {tags &&
                tags.length > 0 &&
                tags.map(tag => (
                  <Tag key={tag.id}>
                    <Link to={`/tags/${tag.tagname}`}>{tag.tagname}</Link>
                  </Tag>
                ))}
            </Paragraph>
            {postActionsElement}
          </Col>

          <Col span={6}>
            <UserPostCard user={user} createdAt={createdAt} />
          </Col>
        </Row>
      </Card>
      <Divider />
    </div>
  );
};
