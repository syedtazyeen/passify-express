import express from 'express';
import { success } from '../handlers/response'
const router = express.Router();


router.get('/', (req, res) => {
    res
        .status(200)
        .json(
            success(
                {
                    message: "API working!",
                    results: null,
                    statusCode: res.statusCode
                })
        );
});


export default router