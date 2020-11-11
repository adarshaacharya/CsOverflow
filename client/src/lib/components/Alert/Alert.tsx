import { displayErrorMessage, displaySuccessNotification } from 'lib/utils';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules/combine-reducer';

const Alert = () => {
  const { msg, type } = useSelector((state: RootState) => state.alert);
  console.log(msg, 'mssgg');

  React.useEffect(() => {
    if (msg && type && msg === 'error') {
      displayErrorMessage(msg);
    }

    if (msg && type && msg === 'success') {
      displaySuccessNotification(msg);
    }
  }, [msg, type]);
  // if (msg && type && msg === 'error') {
  //   return displayErrorMessage(msg);
  // }

  // if (msg && type && msg === 'success') {
  //   return displaySuccessNotification(msg);
  // }

  return <></>;
  // return (
  //   <>
  //     {msg && type && msg === 'success' && <>{displaySuccessNotification(msg)}</>}

  //     {msg && type && msg === 'error' && displayErrorMessage(msg)}
  //   </>
  // );
};

export default Alert;
