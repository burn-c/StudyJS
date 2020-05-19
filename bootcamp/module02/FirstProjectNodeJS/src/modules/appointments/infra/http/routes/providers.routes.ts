import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../../controllers/ProvidersController';
import ProviderMonthAvailabilityCaontroller from '../../controllers/ProviderMonthAvailabilityCaontroller';
import ProviderDayAvailabilityCaontroller from '../../controllers/ProviderDayAvailabilityCaontroller';

const providersRouter = Router();

// Middleware
providersRouter.use(ensureAuthenticated);
const providersController = new ProvidersController();
const providerMonthAvailabilityCaontroller = new ProviderMonthAvailabilityCaontroller();
const providerDayAvailabilityCaontroller = new ProviderDayAvailabilityCaontroller();

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityCaontroller.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityCaontroller.index,
);

export default providersRouter;
