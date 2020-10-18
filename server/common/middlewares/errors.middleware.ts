import { Request, Response } from 'express';

export const errorHandler = (error, _: Request, res: Response) => {
    console.log('Server error', error);
    res.statusCode = error.statusCode;
    res.json(error);
};
