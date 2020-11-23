import { BaseHttpError } from './base-http-error';

class NotFound extends BaseHttpError {
  constructor(error: string) {
    super(404, error);
  }
}

export default NotFound;
