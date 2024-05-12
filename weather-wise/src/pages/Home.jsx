import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../components/navbar";
import Search from "../components/search";
import Card from "../components/card";
import Rain from "../components/rain";
import Card_Modal from "../components/card_modal";
import Advice_Modal from "../components/advice_modal";
import { useCardOrder } from "../components/CardOrderContext"; // Make sure this import path is correct
import SheetDemo from "../components/sheet";

function Home() {
  const { cardOrder } = useCardOrder();

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
      description: "Health-related information",
      imageSrc: "https://cdn-icons-png.flaticon.com/128/3004/3004458.png",
      link: "/health",
      component: (props) => (
        <Link to={props.link}>
          <Card {...props} />
        </Link>
      ),
    },
    Crops: {
      description: "Recommendations for your garden",
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
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Rain />
      <div className="mx-auto flex-grow p-5 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-white/80">Aveiro</h2>
        <h2 className="text-8xl font-bold mb-2 text-white/80">19°</h2>
        <h2 className="text-2xl font-bold mb-2 text-white/80">Mostly Cloudy</h2>
        <h2 className="text-1xl font-bold mb-6 text-white/80">25°C | 17°C </h2>
        <Search placeholder="Is it going to rain?" />
      </div>
      <div className="flex flex-col justify-end items-end mr-20 mb-5">
        <SheetDemo></SheetDemo>
      </div>
      <div className="flex justify-around mb-40 card-container">
        {cardOrder.map((cardName) => {
          const config = cardConfig[cardName];
          if (!config) {
            console.error(`Configuration not found for card: ${cardName}`);
            return null; // Skip rendering this card
          }

          // Render the appropriate component based on the configuration
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
