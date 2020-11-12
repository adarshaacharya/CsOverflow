import { Button, Card, Divider, Form, Input, Layout, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { registerUser } from 'store/modules/auth/auth.actions';
import { ISignupData } from 'store/modules/auth/auth.types';
import { RootState } from 'store/modules/combine-reducer';
import logo from 'assets/images/csoverflow-logo.png';

const { Content } = Layout;
const { Text, Title } = Typography;
const { Item } = Form;
const { Password } = Input;

const Signup = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const onFormSubmit = (formData: ISignupData) => {
    const { name, email, password } = formData;
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Content className="sign-up">
      <Card className="sign-up-card">
        <div className="sign-up-card__intro">
          <Title level={3} className="sign-up-card__intro-logo">
            <img src={logo} alt="logo" />
          </Title>

          <Title level={3} className="sign-up-card__intro-title">
            Sign up to CS Overflow!
          </Title>

          <Text className="sig-up-card__intro-text">
            Create your account to ask or answer questions and unlock all features.
          </Text>
        </div>

        <Form layout="vertical" onFinish={onFormSubmit} size="large" className="sign-up-card__form">
          <Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name',
              },
              { min: 2, message: 'Name must be min 2 characters.' },
            ]}
          >
            <Input />
          </Item>

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
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              { min: 6, message: 'Password must be minimum 6 characters long.' },
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

          <Item>
            <Button type="primary" htmlType="submit" className="sign-up-card__form-button">
              Register
            </Button>
          </Item>
        </Form>
        <Text type="secondary">
          Note: By creating an account, you agree our terms of service, privacy policy and cookie policy. We will never
          share your personal information with anyone.
        </Text>
        <Divider />
        <Text>
          Already have an account ?<Link to="/login"> Login.</Link>
        </Text>
      </Card>
    </Content>
  );
};

export default Signup;
