import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Divider, List, Typography } from 'antd';
import UserPostCard from 'lib/components/UserPostCard';
import { PostCard } from 'lib/components/PostCard';
import moment from 'moment';

type Props = {
  posts: {
    id: number;
    title: string;
    createdAt: string;
  }[];
};
const { Title, Paragraph } = Typography;

const UserPosts: React.FC<Props> = ({ posts }) => {
  const userPostsList = (
    <div className="user-post__list-items">
      <List
        itemLayout="horizontal"
        dataSource={posts}
        locale={{ emptyText: "User doesn't have asked any question yet !" }}
        renderItem={post => (
          <List.Item key={post.id} className="user-posts__list-items--item">
            <Link to={`/posts/${post.id}`} className=" user-posts__list-items--item-title">
              {post.title}
            </Link>
            <Paragraph type="secondary">asked {moment(post.createdAt).fromNow()}</Paragraph>
          </List.Item>
        )}
      />
    </div>
  );

  return (
    <div className="user-posts">
      <Title level={4} className="user-posts__title">
        Latest Questions Asked
      </Title>
      <Paragraph className="user-posts__description">
        This section highlights the latest questions asked by the user. You can click on the questions to view the full
        details abou the post.
      </Paragraph>
      {userPostsList}
    </div>
  );
};

export default UserPosts;
