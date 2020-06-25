import { Router } from 'express';
import WeatherRouter from './weatherRoutes';
import SearchWeather from './searchWeather';

const routes = Router();

routes.use('/weather', WeatherRouter);
routes.use('/searchWeather', SearchWeather);

export default routes;
