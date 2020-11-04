import { Layout, Typography } from 'antd';
import React from 'react';

const { Content } = Layout;
const { Title } = Typography;

const About = () => {
  return (
    <Content className="about">
      <div className="about-hero">
        <Title level={1} className="about-hero__title">
          About CS Overflow
        </Title>
        <div className="about-hero__subtitle">More info coming soon...</div>
      </div>
    </Content>
  );
};

export default About;
