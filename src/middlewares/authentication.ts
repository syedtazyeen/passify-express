import { NextFunction, Response } from "express"
import { error } from "../handlers/response"

const authentication = (req: any, res: Response, next: NextFunction) => {
    if (req.user) next()
    else return res.status(401).json(error({
        message: "Unauthorised",
        statusCode: res.statusCode
    }))
}

export default authentication