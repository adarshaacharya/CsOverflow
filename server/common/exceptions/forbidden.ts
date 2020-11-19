import { BaseHttpError } from './base-http-error';

class Forbidden extends BaseHttpError {
  constructor(error) {
    super(403, error);
  }
}
export default Forbidden;
