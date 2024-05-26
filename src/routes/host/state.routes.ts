import express from 'express';
const stateRouter = express.Router();

import { getHostState } from '../../controllers/state.controller';
import { switchCreatorState } from '../../controllers/switch.controller';

stateRouter.get('/', getHostState)
stateRouter.get('/switch', switchCreatorState)

export default stateRouter