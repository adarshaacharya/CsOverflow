import React, { useState } from 'react';
import { Comment, Avatar, Form, Button, List, Input, Typography } from 'antd';
import moment from 'moment';

const { Item } = Form;
const { TextArea } = Input;
const { Title, Paragraph, Text } = Typography;

export const AnswerCreate = () => {
  const [value, setValue] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setValue('');
      setSubmitting(false);
    }, 3000);
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
