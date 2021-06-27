import { useAppSelector } from 'lib/hooks/reduxHooks';
import { displayErrorMessage, displaySuccessNotification } from 'lib/utils';
import React, { useEffect } from 'react';

const AlertBoundary: React.FC = ({ children }) => {
  const { msg, type } = useAppSelector(state => state.alert);

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
