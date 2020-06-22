import { Router } from 'express';
import WeatherRouter from './weatherRoutes';

const routes = Router();

routes.use('/weather', WeatherRouter);

export default routes;
