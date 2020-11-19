import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Comment, Layout, Tooltip, Typography } from 'antd';
import { ErrorBanner } from 'lib/components/ErrorBanner';
import { PageSkeleton } from 'lib/components/PageSkeleton';
import Sidebar from 'lib/components/Sidebar';
import moment from 'moment';
import React, { createElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnswers } from 'store/modules/answers/answers.actions';
import { RootState } from 'store/modules/combine-reducer';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export const PostAnswerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { loading, answers, error } = useSelector((state: RootState) => state.answer);

  useEffect(() => {
    dispatch(getAnswers(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <>
        <Content className="posts">
          <PageSkeleton />
        </Content>
      </>
    );
  }

  if (error) {
    return (
      <Content className="answers">
        <ErrorBanner
          description={`Answers may not exist or we 've encounted an error. Please try again soon. Details :  ${error}`}
        />
        <PageSkeleton />
      </Content>
    );
  }

  const answersSectionElement = (
    <>
      {answers.length < 1 ? (
        <Paragraph>No comments found.</Paragraph>
      ) : (
        answers.map(
          answer =>
            answer.user && (
              <Comment
                author={answer.user.name}
                avatar={<Avatar src={answer.user.avatar} alt={answer.user.name} />}
                content={<Paragraph>{answer.body}</Paragraph>}
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment(answer.updatedAt).fromNow()}</span>
                  </Tooltip>
                }
                key={answer.id}
              />
            )
        )
      )}
    </>
  );

  return (
    <>
      <Title level={5}>Answers</Title>
      {answersSectionElement}
    </>
  );
};
