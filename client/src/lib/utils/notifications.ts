import { message, notification } from 'antd';

export function displaySuccessNotification(message: string, description?: string) {
  return notification['success']({
    message,
    description,
    placement: 'topLeft',
    style: {
      marginTop: 50,
    },
  });
}

export function displayErrorMessage(error: string) {
  return message.error(error);
}

export function displayWarningMessage(warning: string) {
  return message.warning(warning);
}
