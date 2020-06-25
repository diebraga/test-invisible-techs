import { Router } from 'express';
import SearchService from '../service/searchWeather';

const searchWeather = Router();

searchWeather.post('/', async (req, res) => {
  try {
    const { city, code } = req.body;

    const searchService = new SearchService();

    const response = await searchService.execute({
      city,
      code,
    });

    return res.json(response);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default searchWeather;
