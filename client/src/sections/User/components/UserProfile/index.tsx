import { Card, Col, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { IUser } from 'store/modules/auth/auth.types';

interface Props {
  user: IUser;
}

const { Text, Title, Paragraph } = Typography;

export const UserProfile: React.FC<Props> = ({ user }) => {
  const { name, email, avatar, createdAt } = user;

  return (
    <div className="user-profile">
      <Card className="user-profile__card">

        <Col span={12} className="user-profile__avatar">
          <Avatar src={avatar} size={100} />
          <Text type="secondary" className="user-profile__avatar-text">
            This image is generated using Gravatar which scraps email as per your email avatar.
          </Text>
        </Col>

        <Col span={12} className="user-profile__details">
          <Title level={3}>{name}</Title>
          <Paragraph>
            Email : <Text strong>{email}</Text>
          </Paragraph>
        </Col>
      </Card>
    </div>
  );
};
