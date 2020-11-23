import { CheckCircleTwoTone, PlayCircleTwoTone } from '@ant-design/icons';
import { Divider, Layout, Typography } from 'antd';
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
            Open source Q/A  for
            <strong> Computer Science & Engineering students.</strong>
          </Text>
          <div className="about__body">
            <div className="about__body--info">
              <Paragraph>
                CS Overflow is the forum inspired from &nbsp;
                <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
                  Stack Overflow
                </a>{' '}
                - which is question and answer site for professional and enthusiast programmers. But I found the need of
                the standalone site where students can ask the questions regarding subjects like Theorey of Computation,
                Data Structures and Algorithms, Compiler Design, Discrete Mathematics,Operating System etc. So, Computer
                Science Overflow aka CS Overflow acts as bridge between two students for clearing any sorts of doubt
                regarding CS and engineering topics.
              </Paragraph>

              <Paragraph>
                Feel free to add a question, contribute an answer and to clear any doubt. The sole purpose of this site
                is to give the correct answer and derivation of all relevant computer science and engineering questions.
              </Paragraph>

              <Paragraph type="danger">
                Asking question not related to computer science may lead to ban from community. 🚫
              </Paragraph>
            </div>
            <Divider />

            <div className="about__body--features">
              <Title level={4}>Features</Title>
              <Paragraph>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                &nbsp; Authentication
              </Paragraph>
              <Paragraph>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                &nbsp; Ask question by categorizing based on tags and perform CRUD optertions
              </Paragraph>
              <Paragraph>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                &nbsp; Upvote and submit answer to question
              </Paragraph>
              <Paragraph>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                &nbsp; Filter question based on tags nad search feature
              </Paragraph>
              <Paragraph>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                &nbsp; Attractive user Dashboard, and many more..
              </Paragraph>
            </div>
            <Divider />

            <div className="about__body--tech-stack">
              <Title level={4}> Tech Stack</Title>
              <Paragraph>
                <PlayCircleTwoTone />
                &nbsp; Frontend : Typescript, React.js, Redux
              </Paragraph>
              <Paragraph>
                <PlayCircleTwoTone />
                &nbsp; Styling : Ant Design, Custom Css with BEM naming convention
              </Paragraph>

              <Paragraph>
                <PlayCircleTwoTone />
                &nbsp; Backend : Typescript, Node.js with Express framework
              </Paragraph>

              <Paragraph>
                <PlayCircleTwoTone />
                &nbsp; Database : Sequelize ORM with PostgresSQL database
              </Paragraph>
            </div>
            <Divider />

            <div className="about__body--contribution">
              <Title level={4}> Contributing</Title>
              <Paragraph>
                This project is completly open-sourced so you can check out code on github repo. Contributions, issues
                and feature requests are welcome. After cloning & setting up project locally, you can just submit a PR
                to this repo and it will be deployed once it's accepted.
              </Paragraph>
              <Paragraph>
                Check out
                <a href="https://github.com/adarshaacharya/CsOverflow" target="_blank" rel="noopener noreferrer">
                  &nbsp; Github repository &nbsp;
                </a>
                for more information.
              </Paragraph>
            </div>

            <Divider />
            <div className="about__body--liscense">
              <Title level={4}> License</Title>
              <Paragraph>
                Copyright © 2020 &nbsp;
                <a href="https://github.com/adarshaacharya" target="_blank" rel="noopener noreferrer">
                  Aadarsha Acharya.&nbsp;
                </a>
                This project is
                <a
                  href="https://github.com/adarshaacharya/CsOverflow/blob/master/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  &nbsp; MIT licensed.
                </a>
              </Paragraph>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default About;
