import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { validation } from './response';

// Error handling middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error:', err);
    return res.status(500).json({
        message: 'Internal server error',
        statusCode: 500,
    });
};

// validation handling
export const validationHandler = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(validation({
            message: "Validation error",
            errors: errors.array()
        }));
    }
    next();
};

export default errorHandler;
