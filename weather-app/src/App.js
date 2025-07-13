import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = "4bdd8955c806cf3f8a6fa23314a7a325";


  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{
      fontFamily: 'Segoe UI, sans-serif',
      padding: '40px',
      maxWidth: '420px',
      margin: 'auto',
      marginTop: '60px',
      background: 'linear-gradient(to bottom right, #c6e2ff, #f0faff)',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      textAlign: 'center',
    }}>
      <h2 style={{
        color: '#2a4365',
        marginBottom: '30px',
        fontSize: '28px',
      }}>🌤️ Weather App</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: '12px',
          width: '85%',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px',
          outlineColor: '#4299e1',
        }}
      />
      <br />
      <button
        onClick={getWeather}
        style={{
          marginTop: '15px',
          padding: '12px 24px',
          backgroundColor: '#3182ce',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '15px',
          cursor: 'pointer',
          transition: '0.3s',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#2b6cb0'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#3182ce'}
      >
        Get Weather
      </button>

      {loading && <p style={{ marginTop: '20px', fontStyle: 'italic' }}>🌦️ Fetching weather...</p>}
      {error && <p style={{ color: '#e53e3e', marginTop: '20px', fontWeight: 'bold' }}>{error}</p>}

      {weather && (
        <div style={{
          marginTop: '25px',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px solid #cbd5e0',
          boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        }}>
          <h3 style={{ marginBottom: '10px', color: '#2d3748' }}>{weather.name}</h3>
          <p style={{ fontSize: '24px', color: '#1a202c' }}>
            🌡️ {weather.main.temp}°C
          </p>
          <p style={{ textTransform: 'capitalize', color: '#4a5568' }}>
            {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
