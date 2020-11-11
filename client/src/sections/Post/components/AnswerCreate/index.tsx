import { Button, Form, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addAnswer } from 'store/modules/answers/answers.actions';
import { RootState } from 'store/modules/combine-reducer';

const { Item } = Form;
const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

interface MatchProps {
  id: string;
}

export const AnswerCreate = () => {
  const [value, setValue] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { id } = useParams<MatchProps>();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.answer);

  const onSubmit = () => {
    setSubmitting(true);
    dispatch(addAnswer({ body: value, postId: id }));
    setSubmitting(loading);
    setValue('');
  };
  return (
    <>
      <Title level={5}>Your Answer</Title>
      <Item>
        <TextArea rows={4} onChange={e => setValue(e.target.value)} value={value} />
      </Item>

      <Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Post Your Answer
        </Button>
      </Item>
    </>
  );
};
