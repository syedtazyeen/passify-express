import { Request, Response } from 'express';
import asyncHandler from '../handlers/asyncHandler';
import prisma from '../prisma';
import { success, error, notFound } from '../handlers/response';

// get any profile by id
export const getProfileByID = asyncHandler(async (req: Request, res: Response) => {
    try {
        const { id } = req.query

        const user = await prisma.user.findUnique({
            where: {
                id: id as string
            }
        });

        // user not found
        if (!user) {
            return res.status(404).json(notFound({
                message: 'Profile not found'
            }));
        }

        // final response
        return res.status(200).json(success({
            message: 'Profile fetched successfully',
            results: { user: user },
        }));

    } catch (err: any) {
        return res.status(500).json(error({
            message: err.message,
            statusCode: err.code,
            errors: err
        }));
    }
});
