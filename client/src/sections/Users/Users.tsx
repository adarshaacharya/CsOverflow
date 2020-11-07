import { Col, Divider, Layout, Row, Typography } from 'antd';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules/combine-reducer';
import { getUsers } from 'store/modules/users/users.actions';
import { UserCard } from './components';

const { Content } = Layout;
const { Paragraph, Title } = Typography;

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUsers());
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
      <Paragraph>No users found.</Paragraph>
    ) : (
      <Row gutter={[48, 48]} className="users__user-cards">
        {users.map(user => (
          <Col span={8} className="users__user-card-wrapper" key={user.id}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    );

  return (
    <>
      <Sidebar />
      <Content className="users">
        <Title level={3} className="users__title">
          Top Users
        </Title>
        <Divider />
        {usersSectionElement}
      </Content>
    </>
  );
};

export default Users;
