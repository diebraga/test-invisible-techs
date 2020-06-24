import { EntityRepository, Repository } from 'typeorm';
import WeatherTime from '../models/weather';

@EntityRepository(WeatherTime)
class WeatherRepo extends Repository<WeatherTime> {
  public async findByDate(date: Date): Promise<WeatherTime | null> {
    const findWeatherTime = await this.findOne({
      where: { date },
    });

    return findWeatherTime || null;
  }
}

export default WeatherRepo;
