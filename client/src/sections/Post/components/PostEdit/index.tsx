import { Button, Divider, Form, Input, Layout, Typography } from 'antd';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import TextEditor from 'lib/components/TextEditor';
import { useAppSelector, useScrollToTop } from 'lib/hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById, updatePost } from 'store/modules/posts/posts.actions';
import { IPostEdit, IPostTag } from 'store/modules/posts/posts.types';

interface Params {
  id: string;
}

function convertArrayToString(tags: IPostTag[]) {
  const tagsArr = tags.map(item => item['tagname']);
  return tagsArr.toString().replace(/,/g, ' ');
}

const { Title, Text } = Typography;
const { Content } = Layout;
const { Item } = Form;

export const PostEdit = () => {
  const { id } = useParams<Params>();
  const dispatch = useDispatch();
  const { post, loading } = useAppSelector(state => state.post);

  useEffect(() => {
    if (id) {
      dispatch<any>(getPostById(id));
    }
  }, [dispatch, id]);

  useScrollToTop();

  const onFormSubmit = (values: IPostEdit) => {
    dispatch(updatePost(id, values));
  };

  if (!post || !post.tags || loading) {
    return (
      <>
        <Sidebar />
        <Content className="content post-edit">
          <PageSkeleton />
        </Content>
      </>
    );
  }

  const initalValues = {
    title: post.title,
    body: post.body,
    tags: convertArrayToString(post.tags),
  };

  const postEditSection = (
    <Form
      layout="vertical"
      onFinish={onFormSubmit}
      initialValues={{
        ...initalValues,
      }}
    >
      <div className="ask__form-header">
        <Title level={3} className="ask__form-title">
          Edit question
        </Title>
        <Text type="secondary">
          Make sure that you've fill the post boxes properly. All the other rules are followed same as creating the
          post.{' '}
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
            maxLength={100}
            placeholder="e.g. How quick sort can be made to run in optimal time in the worst case ?"
          />
        </Item>

        <Item
          name="body"
          label="Body"
          extra="Include all the information someone would need to answer your question"
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
          <Input placeholder="e.g. (algorithm quicksort time-complexity)" value={post.tags.toString()} />
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
      <Content className="content post-edit">{post && postEditSection}</Content>
    </>
  );
};
