import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import WeatherService from '../service/weatherService';
import WeatherRepo from '../repositories/weatherRepo';

const WeatherRouter = Router();

WeatherRouter.get('/', (req, res) => {
  const weatherRepo = getCustomRepository(WeatherRepo);
  const weatherTime = weatherRepo.find();

  return res.json(weatherTime);
});

WeatherRouter.post('/', async (req, res) => {
  const { city, code, condition, date } = req.body;

  const formatedDate = parseISO(date);

  const createSerices = new WeatherService();

  const weatherTime = await createSerices.execute({
    city,
    code,
    condition,
    date: formatedDate,
  });

  res.json(weatherTime);
});

export default WeatherRouter;
