import { Col, Layout, Row } from 'antd';
import { ErrorBanner } from 'lib/components/ErrorBanner';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store/modules/combine-reducer';
import { getUserById } from 'store/modules/users/users.actions';
import { UserProfile } from './components';

const { Content } = Layout;

interface MatchProps {
  id: string;
}

const User = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state: RootState) => state.user);
  const { id } = useParams<MatchProps>();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <Content className="content user">
        <PageSkeleton />
      </Content>
    );
  }
  if (error) {
    return (
      <Content className="content user">
        <ErrorBanner description="This user may not exists we've encountered an error. Please try again later" />
        <PageSkeleton />
      </Content>
    );
  }

  const userProfileElement = user ? <UserProfile user={user} /> : null;

  return (
    <>
      <Sidebar />
      <Content className="content user">
        <Row>
          <Col xs={24}>{userProfileElement}</Col>
        </Row>
      </Content>
    </>
  );
};

export default User;
