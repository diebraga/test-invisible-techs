import { getRepository } from 'typeorm';

import WeatherTime from '../models/weather';

interface RequestDTO {
  city: string;
  code: string;
}

class SearchService {
  public async execute({
    city,
    code,
  }: RequestDTO): Promise<{ weather: WeatherTime }> {
    const weatherRepo = getRepository(WeatherTime);

    const weather = await weatherRepo.findOne({ where: { code } });

    if (!weather) {
      throw new Error('Not found');
    }

    return weather;
  }
}

export default SearchService;
