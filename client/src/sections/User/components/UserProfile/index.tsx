import { Card, Col, Row, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import dayjs from 'dayjs';
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
        <Row>
          <Col span={4} className="user-profile__avatar">
            <Avatar src={avatar} size={150} shape="square" />
            {/* <Paragraph type="secondary" className="user-profile__avatar-text">
              Avatar generated using gravatar.
            </Paragraph> */}
          </Col>

          <Col span={16} className="user-profile__details">
            <Title level={3}>{name}</Title>
            <Paragraph>
              Email : <Text strong>{email}</Text>
            </Paragraph>
            <Paragraph>
              Created at : <Text strong>{dayjs().format('MMMM D, YYYY	')}</Text>
            </Paragraph>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
