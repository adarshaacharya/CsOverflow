import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules/combine-reducer';
import { displayErrorMessage } from 'utils';

const ErrorBoundary = () => {
  const { error } = useSelector((state: RootState) => state.error);

  return <>{error && displayErrorMessage(error)}</>;
};

export default ErrorBoundary;
