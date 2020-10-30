import React from 'react';
import { Card, Layout, Typography, Form, Input, Checkbox, Button } from 'antd';

const { Content } = Layout;
const { Text, Title } = Typography;
const { Item } = Form;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
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
          <Text>Sign in to csoverflow to ask or answer questions and unlock all features.</Text>
        </div>

        <Form {...layout} className="log-in-card__form">
          <Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Item>

          <Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password />
          </Item>

          <Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>

        <Text type="secondary">
          Note: By signing in, you'll be redirected to the Google consent form to sign in with your Google account.
        </Text>
      </Card>
    </Content>
  );
};

export default Login;
