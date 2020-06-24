import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('weather-time')
class WeatherTime {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  city: string;

  @Column()
  code: string;

  @Column()
  condition: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default WeatherTime;
