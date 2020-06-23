import { Router } from 'express';
import { parseISO } from 'date-fns';

import WeatherService from '../service/weatherService';
import WeatherRepo from '../repositories/weatherRepo';

const WeatherRouter = Router();
const weatherRepo = new WeatherRepo();

WeatherRouter.get('/', (req, res) => {
  const weatherTime = weatherRepo.all();

  return res.json(weatherTime);
});

WeatherRouter.post('/', (req, res) => {
  const { city, code, condition, date } = req.body;

  const formatedDate = parseISO(date);

  const createSerices = new WeatherService(weatherRepo);

  const weatherTime = createSerices.execute({
    city,
    code,
    condition,
    date: formatedDate,
  });

  res.json(weatherTime);
});

export default WeatherRouter;
