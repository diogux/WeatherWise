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
      return '#ff0000'; // Vermelho
    } else if (vhi < 30) {
      return '#ff8000'; // Laranja
    } else if (vhi < 45) {
      return '#ffff00'; // Amarelo
    } else if (vhi < 60) {
      return '#80ff00'; // Verde claro
    } else if (vhi < 75) {
      return '#00ff80'; // Verde
    } else if (vhi < 90) {
      return '#00ffff'; // Azul claro
    } else {
      return '#0080ff'; // Azul
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
          zoom={7}
          style={{height: '70vh' }}
          dragging={true}
        >
        <GeoJSON data={conselhos.features} onEachFeature={onEachCity} style={styleFunction} />
        </MapContainer>
      </div>
    );
  };

export default VHImap;
