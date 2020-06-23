import WeatherTime from '../models/weather';

class WeatherRepo {
  private weatherTimeDatabase: WeatherTime[];

  constructor() {
    this.weatherTimeDatabase = [];
  }

  public all(): WeatherTime[] {
    return this.weatherTimeDatabase;
  }

  public create(
    city: string,
    code: number,
    condition: string,
    date: Date,
  ): WeatherTime {
    const weatherTime = new WeatherTime(city, code, condition, date);

    this.weatherTimeDatabase.push(weatherTime);

    return weatherTime;
  }
}

export default WeatherRepo;
