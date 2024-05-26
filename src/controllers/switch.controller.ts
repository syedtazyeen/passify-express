import { Response } from 'express';
import asyncHandler from '../handlers/asyncHandler';
import prisma from '../prisma';
import { success } from '../handlers/response';
import { USER_TYPE } from '../utils/constants';

// swtich to user/creator profile
export const switchCreatorState = asyncHandler(async (req: any, res: Response) => {

    const { id, hostID, type } = req.user

    const updatedType = type === USER_TYPE.USER ? USER_TYPE.CREATOR : USER_TYPE.USER
    const isCreatorNow = updatedType === USER_TYPE.CREATOR

    let updatedUser;
    let host;

    if (isCreatorNow) {

        if (hostID) {
            host = await prisma.host.findUnique({
                where: {
                    id: hostID as string
                }
            })
            updatedUser = await prisma.user.update({
                where: {
                    id: id as string
                },
                data: {
                    type: updatedType
                }
            })
        } else {
            host = await prisma.host.create({
                data: {
                    userID: req.user.id,
                    name: req.user.name
                }
            })
            updatedUser = await prisma.user.update({
                where: {
                    id: id as string
                },
                data: {
                    type: updatedType,
                    hostID: host.id as string
                }
            })
        }
    } else {
        updatedUser = await prisma.user.update({
            where: {
                id: id as string
            },
            data: {
                type: updatedType
            }
        })
    }

    // final response
    return res.status(200).json(success({
        message: host ? "User switched to Creator" : "Creator profile abandoned",
        results: {
            user: updatedUser,
            host: host
        },
        statusCode: res.statusCode,
    }));
});


