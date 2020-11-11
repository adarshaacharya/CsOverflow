import { displayErrorMessage, displaySuccessNotification } from 'lib/utils';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules/combine-reducer';

const AlertBoundary: React.FC = ({ children }) => {
  const { msg, type } = useSelector((state: RootState) => state.alert);

  useEffect(() => {
    if (msg && type === 'error') {
      displayErrorMessage(msg);
    }
    if (msg && type === 'success') {
      displaySuccessNotification(msg);
    }
  }, [msg, type]);
  return <>{children}</>;
};

export default AlertBoundary;
