import express, { Request, Response } from 'express';
import { success } from '../handlers/response';
import authRouter from './auth';
import userRouter from './user.routes';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter)

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json(success({
        message: "API working!",
        results: null,
        statusCode: res.statusCode
    }));
});

export default router;