import { BaseHttpError } from './base-http-error';

class Unauthorized extends BaseHttpError {
  constructor(error: string) {
    super(401, error);
  }
}

export default Unauthorized;
