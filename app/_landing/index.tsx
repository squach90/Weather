"use client";

import React, { useState } from 'react';
import { Section } from './Section';
import axios from 'axios';
import { Input } from "@/components/ui/input" // Assurez-vous que le chemin d'importation est correct

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

function LandingPage() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get<WeatherData>(`/api/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div className="flex items-center mb-4">
        <Input
          type="text"
          className="shadow-md"
          value={city}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCity(e.target.value)}
          style={{ padding: '10px', width: '80%' }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: '10px', marginLeft: '10px' }}
        >
          Search
        </button>
      </div>
      {weatherData && (
        <div className="mt-4 text-center">
          <h2>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} className="mx-auto" />
          <p>Wind: {weatherData.current.wind_kph} kph / {weatherData.current.wind_mph} mph</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Feels like: {weatherData.current.feelslike_c}°C / {weatherData.current.feelslike_f}°F</p>
          <p>UV Index: {weatherData.current.uv}</p>
        </div>
      )}
    </div>
    </div>
    
  );
}

export default LandingPage;
