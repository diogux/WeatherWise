import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const VHImap = () => {
    return (
      <div style={{ width: '100%', height: '500px' }}>
        <MapContainer
          center={[39.3999, -8.2245]} // Coordinates for Portugal
          zoom={10}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    );
  };

export default VHImap;
