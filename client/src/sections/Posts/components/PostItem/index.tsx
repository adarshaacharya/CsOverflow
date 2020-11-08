import React from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { IPost } from 'store/modules/posts/posts.types';
import { Link } from 'react-router-dom';

const { Item } = List;
const { Meta } = Item;

const listData: any = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }: { icon: any; text: any }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

type Props = {
  posts: IPost[];
};

export const PostItem: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={posts}
        renderItem={(item: IPost) => (
          <Item
            key={item.id}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
          >
            <Meta
              // avatar={<Avatar src={item.avatar} />}
              title={<Link to={`${item.id}`}>{item.title}</Link>}
              // description={item.body}
            />
            {item.body}
          </Item>
        )}
      />
    </>
  );
};
