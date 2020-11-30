import { Button, Form, Input, Typography } from 'antd';
import TextEditor from 'lib/components/TextEditor';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addAnswer } from 'store/modules/answers/answers.actions';
import { RootState } from 'store/modules/combine-reducer';

const { Item } = Form;
const { TextArea } = Input;
const { Title } = Typography;

interface MatchProps {
  id: string;
}

interface ICommentCreate {
  body: string;
}

export const PostCreateAnswer = () => {
  const [form] = Form.useForm();

  const { id } = useParams<MatchProps>();
  const dispatch = useDispatch();

  const onSubmit = (values: ICommentCreate) => {
    dispatch(addAnswer({ body: values.body, postId: id }));
    form.resetFields();
  };
  return (
    <>
      <Title level={5}>Your Answer</Title>

      <Form layout="vertical" form={form} onFinish={onSubmit}>
        <Item
          name="body"
          rules={[
            {
              required: true,
              message: 'Please enter correct answer',
            },
          ]}
        >
          {/* @ts-ignore */}
          <TextEditor />
        </Item>

        <Item>
          <Button htmlType="submit" type="primary">
            Post Your Answer
          </Button>
        </Item>
      </Form>
    </>
  );
};
