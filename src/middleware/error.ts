import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const status = err.status || 500;
  const error = err.message || 'Internal server error';
  const details = err.details;

  const response: { error: string; details?: any } = { error };
  if (details) response.details = details;

  res.status(status).json(response);
}