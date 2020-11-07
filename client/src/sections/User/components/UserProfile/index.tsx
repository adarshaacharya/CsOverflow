import { Card, Col, Divider, Row, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import dayjs from 'dayjs';
import React from 'react';
import { IUser } from 'store/modules/auth/auth.types';

interface Props {
  user: IUser;
}

const { Text, Title, Paragraph } = Typography;

const userStatsSection = (
  <>
    <Col span={6} className="user-profile__stats-cell">
      <div className="user-profile__stats-head">3</div>
      <div className="user-profile__stats-tail">Answers</div>
    </Col>
    <Col span={6} className="user-profile__stats-cell">
      <div className="user-profile__stats-head">2</div>
      <div className="user-profile__stats-tail">Questions</div>
    </Col>
    <Col span={6} className="user-profile__stats-cell">
      <div className="user-profile__stats-head">0</div>
      <div className="user-profile__stats-tail">Comments</div>
    </Col>
    <Col span={6} className="user-profile__stats-cell">
      <div className="user-profile__stats-head">2</div>
      <div className="user-profile__stats-tail">Tags</div>
    </Col>
  </>
);

export const UserProfile: React.FC<Props> = ({ user }) => {
  const { name, email, avatar, createdAt } = user;

  return (
    <div className="user-profile">
      <Card className="user-profile__card">
        <Row>
          <Col span={4} className="user-profile__avatar">
            <Avatar src={avatar} size={150} shape="square" />
          </Col>

          <Col span={16} className="user-profile__details">
            <Title level={3}>{name}</Title>
            <Paragraph>
              Email : <Text strong>{email}</Text>
            </Paragraph>
            <Paragraph>
              Created at : <Text strong>{dayjs(createdAt).format('MMMM D, YYYY	')}</Text>
            </Paragraph>
          </Col>
        </Row>
        <Divider />
        <Row>{userStatsSection}</Row>
      </Card>
    </div>
  );
};
