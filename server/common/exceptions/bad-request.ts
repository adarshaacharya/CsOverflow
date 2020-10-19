import { BaseHttpError } from './base-http-error';

class BadRequest extends BaseHttpError {
  constructor(error) {
    super(400, error);
  }
}

export default BadRequest;
