import express from 'express';
const stateRouter = express.Router();

import { getUserState } from '../../controllers/state.controller';


stateRouter.get('/', getUserState)

export default stateRouter