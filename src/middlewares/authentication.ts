import { NextFunction, Response } from "express"
import { error } from "../handlers/response"

export const userAuthentication = (req: any, res: Response, next: NextFunction) => {
    if (req.user) {
        next()
    }
    else return res.status(401).json(error({
        message: "Unauthorised user",
        statusCode: res.statusCode
    }))
}

export const creatorAuthentication = (req: any, res: Response, next: NextFunction) => {
    if (req.user && req.user?.type === 'creator' && req.user?.hostID) {
        next()
    }
    else return res.status(401).json(error({
        message: "Unauthorised creator",
        statusCode: res.statusCode
    }))
}
