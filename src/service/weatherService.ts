import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import WeatherTime from '../models/weather';
import WeatherRepo from '../repositories/weatherRepo';

interface RequestDTO {
  city: string;
  code: string;
  condition: string;
  date: Date;
}

class WeatherService {
  public async execute({
    city,
    code,
    condition,
    date,
  }: RequestDTO): Promise<WeatherTime> {
    const weatherRepo = getCustomRepository(WeatherRepo);

    const dataDate = startOfHour(date);

    const weatherTime = weatherRepo.create({
      city,
      code,
      condition,
      date: dataDate,
    });

    await weatherRepo.save(weatherTime);

    return weatherTime;
  }
}

export default WeatherService;
