import { Response } from "express"
import { error, success } from "../../handlers/response"
import prisma from "../../prisma"


const UserController = {
    async userState(req: any, res: Response) {

        try {
            const userId = req.user.id
            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            })
            console.log(user);
            
            return res.status(200).json(success({
                message: "User fetched successfullly",
                results: {
                    user: user
                },
                statusCode: res.statusCode
            }))
        } catch (e: any) {
            return res.status(401).json(error({
                message: "Unauthorised",
                statusCode: res.statusCode
            }))
        }
    }
}

export default UserController