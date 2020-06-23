import { Router } from 'express';
import { parseISO, startOfHour } from 'date-fns';
import WeatherTime from '../models/weather';
import WeatherRepo from '../repositories/weatherRepo';

const WeatherRouter = Router();
const weatherRepo = new WeatherRepo();

const weatherTimeDatabase: WeatherTime[] = [];

WeatherRouter.get('/', (req, res) => {
  const weatherTime = weatherRepo.all();

  return res.json(weatherTime);
});

WeatherRouter.post('/', (req, res) => {
  const { city, code, condition, date } = req.body;

  const formatedDate = startOfHour(parseISO(date));

  const weatherTime = weatherRepo.create({
    city,
    code,
    condition,
    date: formatedDate,
  });

  res.json(weatherTime);
});

export default WeatherRouter;
