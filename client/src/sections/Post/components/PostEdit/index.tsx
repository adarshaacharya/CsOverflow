import React from 'react';
import { useParams } from 'react-router-dom';

interface Params {
  id: string;
}

export const PostEdit = () => {
  const { id } = useParams<Params>();
  return (
    <div>
      <h1>Post Edit Section</h1>
      {id}
    </div>
  );
};
