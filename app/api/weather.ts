import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_KEY = '25c70e96e17b44ec931130304240206';

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    condition: {
      text: string;
    };
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city } = req.query;

  try {
    const response = await axios.get<WeatherData>(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
}
