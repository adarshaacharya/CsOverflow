import { Layout, Typography } from 'antd';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/combine-reducer';
import { getUsers } from 'store/modules/users/users.actions';
import { UserCard } from './components';

const { Content } = Layout;
const { Paragraph } = Typography;

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUsers);
  }, [dispatch]);

  useScrollToTop();

  if (loading) {
    return (
      <Content className="users">
        <PageSkeleton />
      </Content>
    );
  }

  const usersSectionElement =
    users.length < 1 ? (
      <Paragraph>It appears that no posts have been created. Be the first person to create.</Paragraph>
    ) : (
      <UserCard />
    );

  return (
    <div>
      <Sidebar />
      <Content className="users">{usersSectionElement}</Content>
    </div>
  );
};

export default Users;
