import WeatherTime from '../models/weather';

interface CreateWeatherDTO {
  city: string;
  code: number;
  condition: string;
  date: Date;
}

class WeatherRepo {
  private weatherTimeDatabase: WeatherTime[];

  constructor() {
    this.weatherTimeDatabase = [];
  }

  public all(): WeatherTime[] {
    return this.weatherTimeDatabase;
  }

  public create({
    city,
    code,
    condition,
    date,
  }: CreateWeatherDTO): WeatherTime {
    const weatherTime = new WeatherTime({ city, code, condition, date });

    this.weatherTimeDatabase.push(weatherTime);

    return weatherTime;
  }
}

export default WeatherRepo;
