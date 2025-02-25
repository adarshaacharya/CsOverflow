import { Col, Divider, Layout, Row, Tag, Typography } from 'antd';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import { useAppSelector, useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from 'store/modules/users/users.actions';
import { UserCard } from './components';

const { Content } = Layout;
const { Paragraph, Title } = Typography;

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users } = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useScrollToTop();

  if (loading) {
    return (
      <>
        <Sidebar />
        <Content className="content users">
          <PageSkeleton />
        </Content>
      </>
    );
  }

  const usersSectionElement =
    users.length < 1 ? (
      <Paragraph>
        No users found. Be first one to
        <Link to="/signup"> create account !</Link>
      </Paragraph>
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
      <Content className="content users">
        <Title level={3} className="users__title">
          Users
        </Title>
        <Tag color="purple">
          {users.length} user
          {users.length <= 1 ? '' : 's'}
        </Tag>
        <Divider />
        {usersSectionElement}
      </Content>
    </>
  );
};

export default Users;
