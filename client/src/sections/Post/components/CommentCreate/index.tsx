import React, { useState } from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { Item } = Form;
const { TextArea } = Input;

export const CommentCreate = () => {
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
      <Item>
        <TextArea rows={4} onChange={e => setValue(e.target.value)} value={value} />
      </Item>

      <Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Item>
    </>
  );
};
