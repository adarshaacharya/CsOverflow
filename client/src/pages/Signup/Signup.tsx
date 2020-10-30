import { Card, Layout, Typography, Form } from 'antd';
import React from 'react';

const { Content } = Layout;
const { Text, Title } = Typography;
const { Item } = Form;

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

        <Form className="sign-up-card__form"></Form>
      </Card>
    </Content>
  );
};

export default Signup;
