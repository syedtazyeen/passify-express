import express from 'express';
const profileRouter = express.Router();

import { getProfileByID } from '../../controllers/profile.controller';
import { objectIDValidator } from '../../validations/common.validations';
import { validationHandler } from '../../handlers/error';

profileRouter.get('/getByID',
    objectIDValidator,
    validationHandler,
    getProfileByID);


export default profileRouter;
