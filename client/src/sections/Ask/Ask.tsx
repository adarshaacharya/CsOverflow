import { Button, Divider, Form, Input, Layout, Typography } from 'antd';
import Sidebar from 'lib/components/Sidebar';
import TextEditor from 'lib/components/TextEditor';
import { useScrollToTop } from 'lib/hooks';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from 'store/modules/posts/posts.actions';
import { IPostCreate } from 'store/modules/posts/posts.types';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Item } = Form;

const Ask = () => {
  const dispatch = useDispatch();

  useScrollToTop();

  const onFormSubmit = (values: IPostCreate) => {
    console.log(values);
    dispatch(addPost(values));
  };

  return (
    <>
      <Sidebar />
      <Content className="content ask">
        <Form layout="vertical" onFinish={onFormSubmit}>
          <div className="ask__form-header">
            <Title level={3} className="ask__form-title">
              Ask a public question
            </Title>
            <Text type="secondary">
              The community is here to help you with databases, algorithm, and others computer science topic problems.
              Asking question on non-computer science topics may lead you getting banned from forum.
            </Text>
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
                maxLength={200}
                placeholder="e.g. How quick sort can be made to run in optimal time in the worst case ?"
              />
            </Item>

            <Item
              name="body"
              label="Body"
              rules={[
                {
                  required: true,
                  message: 'Please enter description of question',
                },
              ]}
            >
              {/* @ts-ignore */}
              <TextEditor />
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
                Post your question
              </Button>
            </Item>
          </div>
        </Form>
      </Content>
    </>
  );
};

export default Ask;
