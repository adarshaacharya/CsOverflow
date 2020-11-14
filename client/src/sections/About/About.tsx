import { Layout, Typography } from 'antd';
import Sidebar from 'lib/components/Sidebar';
import React from 'react';

const { Content } = Layout;
const { Title, Text } = Typography;

const About = () => {
  return (
    <>
      <Sidebar />
      <Content className="content about">
        <div className="about-hero">
          <Title level={1} className="about-hero__title">
            About CS Overflow
          </Title>
          <Text className="about-hero__subtitle">More info coming soon...</Text>
        </div>
      </Content>
    </>
  );
};

export default About;
