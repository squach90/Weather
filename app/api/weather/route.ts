// app/api/weather/route.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = '25c70e96e17b44ec931130304240206';

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    wind_mph: number;
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
    uv: number;
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City must be specified' }, { status: 400 });
  }

  try {
    const response = await axios.get<WeatherData>(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return NextResponse.json({ message: 'Error fetching weather data' }, { status: 500 });
  }
}
