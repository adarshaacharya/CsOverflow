import Sidebar from 'lib/components/Sidebar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from 'store/modules/users/users.actions';

const User = () => {
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);
  return (
    <>
      <Sidebar />
      {id}
    </>
  );
};

export default User;
