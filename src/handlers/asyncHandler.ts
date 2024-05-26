import { Request, Response, NextFunction } from 'express';

// Utility function to wrap controllers with try-catch
const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler