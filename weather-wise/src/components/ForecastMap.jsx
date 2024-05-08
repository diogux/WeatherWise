import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, SVGOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import distritos from '../data/Portugal.json';

const ForecastMap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [map, setMap] = useState(null);

  const mapVHIToColor = (vhi) => {
    return '#808080'; // Grey for all districts
  };

  const styleFunction = (feature) => {
    const fillColor = mapVHIToColor(0); // Dummy VHI value
    return {
      fillColor: fillColor,
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7
    };
  };

  const onEachCity = (district, layer) => {
    const districtName = district.properties && district.properties.woe_name;
    if (districtName) {
      layer.on({
        mouseover: (e) => {
          layer.bindTooltip(districtName).openTooltip();
        },
        mouseout: (e) => {
          layer.closeTooltip();
        }
      });
    }
  };

  useEffect(() => {
    const sunIcon = new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/128/3915/3915152.png",
      iconSize: [32, 32],
      iconAnchor: [16, 32], // Ensures the icon is centered and touches the point
      popupAnchor: [0, -32] // Ensures the popup opens above the icon
    });
    
    const cloudIcon = new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/128/3915/3915152.png",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    const mainLocations = [
      { name: 'Lisbon', coordinates: [38.7223, -9.1393], icon: sunIcon },
      { name: 'Porto', coordinates: [41.1579, -8.6291], icon: cloudIcon },
      // Add more main locations as needed
    ];

    if (map) {
      mainLocations.forEach(location => {
        const { name, coordinates, icon } = location;
        const marker = L.marker(coordinates, { icon }).addTo(map);
        marker.bindPopup(name);
      });
    }
  }, [map]);

  const getRandomEmoji = () => {
    const emojis = ['☀️', '☁️', '🌧️', '🌩️', '🌦️', '🌫️']; // Add more emojis as needed
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  const createOverlay = (southwest, northeast) => {
    const bounds = [southwest, northeast];
  
    const randomTemp1 = Math.floor(Math.random() * 20) + 10; // Random temperature between 10°C and 30°C
    const randomTemp2 = Math.floor(Math.random() * 20) + 10; // Random temperature between 10°C and 30°C

    const minTemp = Math.min(randomTemp1, randomTemp2);
    const maxTemp = Math.max(randomTemp1, randomTemp2);

    return (
      <SVGOverlay attributes={{ stroke: 'red'}} bounds={bounds}>
        <foreignObject width="100%" height="100%">
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px', display: 'flex', flexDirection: 'row', alignItems: 'center', height:'80%'}}>
            {/* Column 1 with Sun Emoji */}
            <div style={{fontSize:'20px' , paddingRight:'1px'}}>
              {getRandomEmoji()}
            </div>
            {/* Column 2 with Temperature Information */}
            <div>
              <div style={{ fontSize: '80%', fontWeight:'750', backgroundColor:'orange' }}>{maxTemp}°C</div>
              <div style={{ fontSize: '80%', fontWeight:'750', backgroundColor:'#ADD8E6' }}>{minTemp}°C</div>
            </div>
          </div>
        </foreignObject>
      </SVGOverlay>
    );
  };

  const x = 41.764543 - 41.258904
  const y = -8.078178 - (-8.680932)

  return (
    <div>
      <MapContainer
        center={[39.3999, -8.2245]}
        zoom={6.5}
        style={{ height: '70vh' }}
        dragging={true}
        whenCreated={setMap}
      >
        <GeoJSON data={distritos.features} onEachFeature={onEachCity} style={styleFunction} />
        {createOverlay([38.783394, -9.100071],[38.783394+x,-9.100071+y])}
        {createOverlay([41.258904, -8.680932],[41.258904+x,-8.680932+y])}
        {createOverlay([40.241143, -8.781460],[40.241143+x,-8.781460+y])}
        {createOverlay([40.174020, -7.704081],[40.174020+x,-7.704081+y])}
        {createOverlay([39.014249, -7.715075],[39.014249+x,-7.715075+y])}
        {createOverlay([38.172758, -8.154616],[38.172758+x,-8.154616+y])}
        {createOverlay([37.347644, -8.616555],[37.347644+x,-8.616555+y])}
        {createOverlay([41.339056, -7.341056],[41.339056+x,-7.341056+y])}
      </MapContainer>
    </div>
  );
};

export default ForecastMap;
