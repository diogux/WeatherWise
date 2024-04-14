import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Navbar from '../components/navbar';
import Search from '../components/search';
import Card from '../components/card';
import Rain from '../components/rain';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Rain />
      <div className="mx-auto flex-grow p-10 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold text-grey">Aveiro</h2>
        <h2 className="text-8xl font-bold mb-2 text-grey">19°</h2>
        <h2 className="text-2xl font-bold mb-6 text-grey">Mostly Cloudy</h2>
        <Search />
      </div>
      <div className="flex justify-around mb-40 card-container">
        <Link to="/forecast">
          <Card
            name="Forecast"
            description="Weather forecast for the week"
            imageSrc="https://cdn-icons-png.flaticon.com/128/1163/1163661.png"
          />
        </Link>
          <Card
            name="Daily Advice"
            description="Advice and tips for your activities"
            imageSrc="https://cdn-icons-png.flaticon.com/128/834/834768.png"
          />
        <Link to="/health">
          <Card
            name="Health"
            description="Health-related information"
            imageSrc="https://cdn-icons-png.flaticon.com/128/3004/3004458.png"
          />
        </Link>
        <Link to="/crops">
          <Card
            name="Crops"
            description="Recommendations for your garden"
            imageSrc="https://cdn-icons-png.flaticon.com/128/3658/3658881.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
