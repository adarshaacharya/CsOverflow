import React from 'react';
import { PostItem } from 'sections/Posts/components';
import { IPost } from 'store/modules/posts/posts.types';

type Props ={
 post : IPost
}

export const PostDetails : React.FC<Props>= ({post}) => {
  return (
    <>
    {post.title}
    </>
  );
};
