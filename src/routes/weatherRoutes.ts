import { Router } from 'express';
import { parseISO, startOfHour } from 'date-fns';
import WeatherTime from '../models/weather';

const WeatherRouter = Router();

const weatherTimeDatabase: WeatherTime[] = [];

WeatherRouter.post('/', (req, res) => {
  const { city, code, condition, date } = req.body;

  const formatedDate = startOfHour(parseISO(date));

  const weatherTime = new WeatherTime(city, code, condition, formatedDate);

  weatherTimeDatabase.push(weatherTime);

  res.json(weatherTime);
});

export default WeatherRouter;
