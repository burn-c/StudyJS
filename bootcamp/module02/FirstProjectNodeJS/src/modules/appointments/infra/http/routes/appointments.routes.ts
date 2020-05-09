import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentController from '../../controllers/AppointmentsController';

const appointmentsRouter = Router();

// Middleware
appointmentsRouter.use(ensureAuthenticated);
const appointmentsController = new AppointmentController();

// Create appointment
appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
