import { Layout, Typography } from 'antd';
import Sidebar from 'lib/components/Sidebar';
import React from 'react';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const About = () => {
  return (
    <>
      <Sidebar />
      <Content className="content about">
        <div className="about-hero">
          <Title level={3} className="about-hero__title">
            About CS Overflow
          </Title>
          <Text className="about-hero__subtitle" type="secondary">
            One stop solution for asking, sharing and answering Computer Science questions.
          </Text>
          <Paragraph className="about__body">
            CS Overflow is the forum inspired from &nbsp;
            <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
              Stack Overflow
            </a>{' '}
            - which is question and answer site for professional and enthusiast programmers. But I found the need of the
            standalone site where students can ask the questions regarding subjects like Theorey of Computation, Data
            Structures and Algorithms, Compiler Design, Discrete Mathematics,etc.
          </Paragraph>
        </div>
      </Content>
    </>
  );
};

export default About;
