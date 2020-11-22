import { Button, Divider, Form, Input, Layout, Typography } from 'antd';
import Sidebar from 'lib/components/Sidebar';
import { useScrollToTop } from 'lib/hooks';
import React from 'react';
import { useParams } from 'react-router-dom';

interface Params {
  id: string;
}

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const { Item } = Form;

export const PostEdit = () => {
  const { id } = useParams<Params>();

  useScrollToTop();

  const onFormSubmit = () => {
    console.log('On form submit');
  };

  const postEditSection = (
    <Form layout="vertical" onFinish={onFormSubmit}>
      <div className="ask__form-header">
        <Title level={3} className="ask__form-title">
          Edit question
        </Title>
        <Text type="secondary">Make sure that you've fill the</Text>
        <Divider />
      </div>

      <div className="ask__form-content">
        <Item
          name="title"
          label="Title"
          extra="Be specific and imagine you’re asking a question to another person"
          rules={[
            {
              required: true,
              message: 'Please enter suitable title for question',
            },
          ]}
        >
          <Input
            maxLength={100}
            placeholder="e.g. How quick sort can be made to run in optimal time in the worst case ?"
          />
        </Item>

        <Item
          label="Body"
          name="body"
          rules={[
            {
              required: true,
              message: 'Please enter description of question',
            },
          ]}
        >
          <Input.TextArea
            rows={12}
            maxLength={400}
            placeholder="Include all the information someone would
                need to answer your question"
          />
        </Item>
        <Item
          label="Tags"
          name="tags"
          extra="Add up to 5 tags to describe what your question is about"
          rules={[
            {
              required: true,
              message: 'Please enter at least one tag.',
            },
          ]}
        >
          <Input placeholder="e.g. (algorithm quicksort time-complexity)" />
        </Item>
        <Item>
          <Button type="primary" size="large" htmlType="submit">
            Edit question
          </Button>
        </Item>
      </div>
    </Form>
  );

  return (
    <>
      <Sidebar />
      <Content className="content post-edit">
          {postEditSection}
      </Content>
    </>
  );
};
