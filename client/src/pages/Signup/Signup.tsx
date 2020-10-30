import { Card, Layout, Typography, Form, Input } from 'antd';
import React from 'react';

const { Content } = Layout;
const { Text, Title } = Typography;
const { Item } = Form;
const { Password } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Signup = () => {
  return (
    <Content className="sign-up">
      <Card className="sign-up-card">
        <div className="sign-up-card__intro">
          <Title level={3} className="sign-up-card__intro-title">
            <span role="img" aria-label="fire">
              💥
            </span>
          </Title>

          <Title level={3} className="sign-up-card__intro-title">
            Sign up to CS Overflow!
          </Title>

          <Text className="sig-up-card__intro-text">
            Create your account to ask or answer questions and unlock all features.
          </Text>
        </div>

        <Form {...layout} size="large" className="sign-up-card__form">
          <Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name' }]}>
            <Input />
          </Item>

          <Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please input your email' }]}
          >
            <Input />
          </Item>

          <Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Password />
          </Item>

          <Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Password />
          </Item>
        </Form>
      </Card>
    </Content>
  );
};

export default Signup;
