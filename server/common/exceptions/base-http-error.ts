import { ValidationError } from 'joi';

export interface IBaseHttpError {
  statusCode: number;
  error: ValidationError | any;
}

export class BaseHttpError implements IBaseHttpError {
  public statusCode: number;
  public error: any;

  constructor(statusCode: number, error: any) {
    this.statusCode = statusCode;
    this.error = error;
  }
}
