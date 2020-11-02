import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules/combine-reducer';
import { displayErrorMessage } from 'utils';

const ErrorBoundary: React.FC = () => {
  const { error } = useSelector((state: RootState) => state.error);

  return <div>{error && displayErrorMessage(error)}</div>;
};

export default ErrorBoundary;
