import { Request, Response } from "express";
import asyncHandler from "../handlers/asyncHandler";
import { notFound, success } from "../handlers/response";
import prisma from "../prisma";


// get host by ID
export const getHostByID = asyncHandler(async (req: Request, res: Response) => {
    
    const { id } = req.query
    const host = await prisma.host.findUnique({
        where: {
            id: id as string
        }
    });

    // host not found
    if (!host) {
        return res.status(404).json(notFound({
            message: 'Host not found'
        }));
    }

    // final response
    return res.status(200).json(success({
        message: 'Host fetched successfully',
        results: { host: host },
    }));
})