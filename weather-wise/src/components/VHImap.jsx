import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Map.css";
import distritos from '../data/Portugal.json';
import conselhos from '../data/Conselhos.json';

const VHImap = () => {

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Função para mapear o valor de VHI para uma cor
  const mapVHIToColor = (vhi) => {
    if (vhi < 15) {
      return '#8B0000'; // Maroon
    } else if (vhi < 30) {
      return '#A52A2A'; // Brown
    } else if (vhi < 45) {
      return '#FF0000'; // Red
    } else if (vhi < 60) {
      return '#FFA500'; // Orange
    } else if (vhi < 75) {
      return '#FFFF00'; // Yellow
    } else if (vhi < 90) {
      return '#ADFF2F'; // GreenYellow
    } else {
      return '#008000'; // Green
    }
  };
  

  // Função para definir a cor de preenchimento de cada distrito
  const styleFunction = (feature) => {
    const randomColor = getRandomColor(); // Gerar uma cor aleatória para cada distrito
    const vhiValue = Math.floor(Math.random() * 101); // Simulando um valor aleatório de VHI de 0 a 100
    const fillColor = mapVHIToColor(vhiValue); // Mapear o valor de VHI para uma cor
    return {
      fillColor: fillColor,
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7
    };
  };

  const onEachCity = (district, layer) => {
    if (district.properties && district.properties.Concelho) {
      layer.on({
        mouseover: (e) => {
          layer.bindTooltip(district.properties.Concelho).openTooltip();
        },
        mouseout: (e) => {
          layer.closeTooltip();
        }
      });
    }
  };
  
  return (
      <div>
        <MapContainer
          center={[39.3999, -8.2245]} // Coordinates for Portugal
          zoom={6.5}
          style={{height: '70vh' }}
          dragging={true}
        >
        <GeoJSON data={conselhos.features} onEachFeature={onEachCity} style={styleFunction} />
        </MapContainer>
      </div>
    );
  };

export default VHImap;
