import { startOfHour } from 'date-fns';
import WeatherTime from '../models/weather';
import WeatherRepo from '../repositories/weatherRepo';

interface RequestDTO {
  city: string;
  code: string;
  condition: string;
  date: Date;
}

class WeatherService {
  private weatherRepo: WeatherRepo;

  constructor(weatherRepo: WeatherRepo) {
    this.weatherRepo = weatherRepo;
  }

  public execute({ city, code, condition, date }: RequestDTO): WeatherTime {
    const dataDate = startOfHour(date);

    const weatherTime = this.weatherRepo.create({
      city,
      code,
      condition,
      date: dataDate,
    });

    return weatherTime;
  }
}

export default WeatherService;
