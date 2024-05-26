import express, { Request, Response } from 'express';
import { success } from '../handlers/response';
import authRouter from './auth';
import userRouter from './user';
import eventRouter from './event';
import hostRouter from './host';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter)
router.use('/host', hostRouter)
router.use('/event', eventRouter)

// default
router.get('/', (req: Request, res: Response) => {
    return res.status(200).json(success({
        message: "API working!",
        results: null,
        statusCode: res.statusCode
    }));
});

export default router;