import { uuid } from 'uuidv4';

class WeatherTime {
  id: string;

  city: string;

  code: number;

  condition: string;

  date: Date;

  constructor({ city, code, condition, date }: Omit<WeatherTime, 'id'>) {
    this.id = uuid();
    this.city = city;
    this.code = code;
    this.condition = condition;
    this.date = date;
  }
}

export default WeatherTime;
