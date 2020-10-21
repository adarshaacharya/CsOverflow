import { BadRequest } from '../exceptions';

function validateIdOrThrow(num: any): number {
  if (isNaN(num) || num > Number.MAX_SAFE_INTEGER || num <= 0) {
    throw new BadRequest('Incorrect post Id');
  }
  return parseInt(num);
}

export default validateIdOrThrow;
