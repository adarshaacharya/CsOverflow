import { Button, Card, Divider, Form, Input, Layout, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Text, Title } = Typography;
const { Item } = Form;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

const Login = () => {
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
        <Form {...layout} size={'large'} className="log-in-card__form">
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

          <Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password' }]}>
            <Input.Password />
          </Item>

          <Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="log-in-card__form-button">
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
