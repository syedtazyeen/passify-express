import { NextFunction, Request, Response } from 'express';
import asyncHandler from '../handlers/asyncHandler';
import { success } from '../handlers/response';
import { getHostByID } from './host.controller';

// get req user
export const getUserState = asyncHandler(async (req: Request, res: Response) => {
    // final response
    return res.status(200).json(success({
        message: 'User fetched successfully',
        results: {
            user: req.user,
        },
        statusCode: res.statusCode,
    }));
});



// get req host
export const getHostState = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
    const { hostID } = req.user
    req.query.id = hostID
    // next
    getHostByID(req, res, next)
});