import { Layout, Typography } from 'antd';
import React from 'react';

const { Content } = Layout;
const { Title, Text } = Typography;

const About = () => {
  return (
    <Content className="about">
      <div className="about-hero">
        <Title level={1} className="about-hero__title">
          About CS Overflow
        </Title>
        <Text className="about-hero__subtitle">More info coming soon...</Text>
      </div>
    </Content>
  );
};

export default About;
