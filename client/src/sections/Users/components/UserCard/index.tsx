import { Button, Card, Divider, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { Link } from 'react-router-dom';
import { IUser } from 'store/modules/auth/auth.types';

interface Props {
  user: IUser;
}

const { Paragraph, Text } = Typography;

export const UserCard: React.FC<Props> = ({ user }) => {
  const { id, avatar, name } = user;
  return (
    <Link to={`/users/${id}`}>
      <Card className="users__user-card">
        <Avatar src={avatar} size={100} />
        <Divider />
        <div className="users__user-card--details">
          <Text strong>{name}</Text>
          <Button type="primary">View Profile</Button>
        </div>
      </Card>
    </Link>
  );
};
