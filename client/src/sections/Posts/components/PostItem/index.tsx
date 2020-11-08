import { Avatar, List } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';
import { IPost } from 'store/modules/posts/posts.types';

const { Item } = List;
const { Meta } = Item;

type Props = {
  post: IPost;
};

export const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <>
      {post.body}
    </>
  );
};
