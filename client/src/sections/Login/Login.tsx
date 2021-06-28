import { Button, Card, Divider, Form, Input, Layout, Typography } from 'antd';
import { useAppSelector } from 'lib/hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from 'store/modules/auth/auth.actions';
import { ISignInData } from 'store/modules/auth/auth.types';

const { Content } = Layout;
const { Text, Title } = Typography;
const { Item } = Form;

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useAppSelector(state => state.auth);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onFormSubmit = (formData: ISignInData) => {
    dispatch(loginUser(formData));
  };

  return (
    <Content className="log-in">
      <Card className="log-in-card">
        <div className="log-in-card__intro">
          <Title level={3} className="log-in-card__intro-title">
            <span role="img" aria-label="wave">
              👋
            </span>
          </Title>
          <Title level={3} className="log-in-card__intro-title">
            Welcome back !
          </Title>
          <Text className="log-in-card__intro-text">Sign in to ask or answer questions and unlock all features.</Text>
        </div>
        <Form layout="vertical" size={'large'} className="log-in-card__form" onFinish={onFormSubmit}>
          <Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Item>

          <Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password' },
              { min: 6, message: 'Password must be minimum 6 characters long.' },
            ]}
          >
            <Input.Password />
          </Item>

          <Item>
            <Button type="primary" htmlType="submit" loading={loading} className="log-in-card__form-button">
              Log In
            </Button>
          </Item>
        </Form>
        <Text type="secondary">
          Note: By signing in, you'll agree our terms of service, privacy policy and cookie policy. We will never share
          your personal information with anyone.
        </Text>
        <Divider />
        <Text>
          New to CS Overflow?
          <Link to="/signup"> Create an account.</Link>
        </Text>
      </Card>
    </Content>
  );
};

export default Login;
