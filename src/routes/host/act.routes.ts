import express from 'express';
const actRouter = express.Router();

import { getHostByID } from '../../controllers/host.controller';
import { objectIDValidator } from '../../validations/common.validations';
import { validationHandler } from '../../handlers/error';

actRouter.get('/getByID',
    objectIDValidator,
    validationHandler,
    getHostByID);

export default actRouter;

