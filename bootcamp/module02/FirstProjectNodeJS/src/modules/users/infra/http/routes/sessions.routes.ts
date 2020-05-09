import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

// Create sessions
sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
