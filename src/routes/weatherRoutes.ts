import { Router } from 'express';
import { uuid } from 'uuidv4';
import { parseISO, startOfHour } from 'date-fns';

interface WeatherTime {
  id: string;
  city: string;
  code: number;
  date: Date;
}

const WeatherRouter = Router();

const weatherTimeDatabase: WeatherTime[] = [];

WeatherRouter.post('/', (req, res) => {
  const { city, code, date } = req.body;

  const formatedDate = startOfHour(parseISO(date));

  const weatherTime = {
    id: uuid(),
    city,
    code,
    date: formatedDate,
  };

  weatherTimeDatabase.push(weatherTime);

  res.json(weatherTime);
});

export default WeatherRouter;
