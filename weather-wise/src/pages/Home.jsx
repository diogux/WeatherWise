import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../components/navbar";
import Search from "../components/searchbar";
import Card from "../components/card";
import Rain from "../components/rain";
import { useCardOrder } from "../components/CardOrderContext";
import SheetDemo from "../components/sheet";

function Home() {
  const { cardOrder } = useCardOrder();
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const resultCardRef = useRef(null);
  const [isExiting, setIsExiting] = useState(false);

  const handleSearch = () => {
    setSearchResult(
      <>
        <span style={{ fontSize: '16px' }}>The air quality is good for a walk outside, however, it is going to rain today. Consider indoor activities. </span>
        <Link to="/forecast" style={{ color: '#1565C0', fontSize: '15px', fontWeight: 'bold' }}>Check the forecast</Link>
      </>
    );
    setIsExiting(false);  // Reset exit state
    setShowSearchResult(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        setShowSearchResult(false);
      }, 500);  // Duration of the exit animation
      return () => clearTimeout(timer);
    }
  }, [isExiting]);

  const handleClickOutside = (event) => {
    if (resultCardRef.current && !resultCardRef.current.contains(event.target)) {
      setIsExiting(true);  // Trigger exit animation
    }
  };

  const cardConfig = {
    Forecast: {
      description: "Weather forecast for the week",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/1163/1163661.png",
      link: "/forecast",
      component: (props) => (
        <Link to={props.link}>
          <Card {...props} />
        </Link>
      ),
    },
    Health: {
      description: "Pollutants, UV levels and more",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/3004/3004458.png",
      link: "/health",
      component: (props) => (
        <Link to={props.link}>
          <Card {...props} />
        </Link>
      ),
    },
    Crops: {
      description: "Vegetation and soil information",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/3658/3658881.png",
      link: "/crops",
      component: (props) => (
        <Link to={props.link}>
          <Card {...props} />
        </Link>
      ),
    },
    Travel: {
      description: "Tips for your travel plans",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/870/870194.png",
      link: "/travel",
      component: (props) => (
        <Link to={props.link}>
          <Card {...props} />
        </Link>
      ),
    },
    Storms: {
      description: "Extreme weather information",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/1146/1146860.png",
      link: "/storms",
      component: (props) => (
        <Link to={props.link}>
          <Card {...props} />
        </Link>
      ),
    },
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(-15px);
            }
          }

          .slide-in {
            animation: slideIn 0.5s ease-out forwards;
          }

          .slide-out {
            animation: slideOut 0.5s ease-out forwards;
          }
        `}
      </style>
      <Navbar />
      <Rain />
      <div className="mx-auto flex-grow p-5 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-white/80">Aveiro</h2>
        <h2 className="text-8xl font-bold mb-2 text-white/80">19°</h2>
        <h2 className="text-2xl font-bold mb-2 text-white/80">Mostly Cloudy</h2>
        <h2 className="text-1xl font-bold mb-6 text-white/80">25°C | 17°C </h2>
        <Search placeholder="Should I take a walk?" onSearch={handleSearch} />
        <div className="w-full flex justify-center mt-3">
          {showSearchResult && (
            <div ref={resultCardRef} className={`absolute top-70 w-full max-w-4xl p-3 bg-white/60 rounded-xl shadow-lg ${isExiting ? 'slide-out' : 'slide-in'}`}>
              <h3 className="text-lg">{searchResult}</h3>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-end items-end mr-20 mb-5">
        <SheetDemo />
      </div>
      <div className="flex justify-around mb-40 card-container">
        {cardOrder.slice(0, 4).map((cardName) => {
          const config = cardConfig[cardName];
          if (!config) {
            console.error(`Configuration not found for card: ${cardName}`);
            return null; // Skip rendering this card
          }

          return config.component({
            key: cardName,
            name: cardName,
            description: config.description,
            imageSrc: config.imageSrc,
            link: config.link,
          });
        })}
      </div>
    </div>
  );
}

export default Home;
