import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  posts: {
    id: number;
    title: string;
  }[];
};

const UserPosts: React.FC<Props> = ({ posts }) => {
  if (posts.length < 1) {
    return <p>No posts found be first one to create it</p>;
  }
  return (
    <>
      {posts.map(post => (
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      ))}
    </>
  );
};

export default UserPosts;
