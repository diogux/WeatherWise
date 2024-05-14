import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, SVGOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import countries from '../data/countries.json';
import huricane from '../data/huricane.png';
import huricane2 from '../data/huricane2.png';
import h3 from '../data/h3.png';

const StormsMap = () => {
    const [searchTerm, setSearchTerm] = useState('');

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
    }

    const imageBounds = [
        [27.945886,-120.577252],
        [-74.322204,68.760085]
    ];

    const img2 = [
        [70.941769,-14.967658],
        [35.701917,109.568565]
    ];

    const img3 = [
        [53.479874,-139.640891],
        [-7.637498,-50.665532]
    ];

    const img4 = [
        [66.385782,-31.146986],
        [27.949526,22.134803]
    ];

    const img5 = [
        [74.997832,-148.491847],
        [45.932050,-46.116972]
    ];

    const img6 = [
        [12.012458,92.342081],
        [-49.514510,187.679133]
    ];

    const img7 = [
        [76.386849,43.466443],
        [26.249083,191.541391]
    ];

    return (
        <div>
            <MapContainer
                center={[39.3999, -8.2245]}
                zoom={3}
                zoomControl={false}
                dragging={true}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                //add a max bounds to prevent the user from scrolling too far
                maxBounds={[
                    [90, 180],
                    [-90, -180]
                ]}
                style={{ height: "80vh", width: "70vw" }}
            >
                {/* Adicione a camada da imagem como um overlay */}
                <SVGOverlay bounds={imageBounds}>
                    <image href="https://maps.weatherforyou.com/0KT4zzIuojnRWn4BTWTCX_OLEgTCckfgPaBRSRZhx3Kx3dO87LLBvuLfWPsW6a/radar-2m/750x562/39.06,-77.4,7/current.png" x={0} y={0} width="100%" height="100%" style={{opacity :0.7}} />
                </SVGOverlay>
                <SVGOverlay bounds={img2}>
                    <image href={huricane} x={0} y={0} width="100%" height="100%" style={{opacity :0.5}} />
                </SVGOverlay>
                <SVGOverlay bounds={img3}>
                    <image href={huricane} x={0} y={0} width="100%" height="300" style={{opacity :0.5}} />
                </SVGOverlay>
                <SVGOverlay bounds={img4}>
                    <image href={huricane2} x={0} y={0} width="100%" height="100%" style={{opacity :0.5}} />
                </SVGOverlay>
                <SVGOverlay bounds={img5}>
                    <image href={h3} x={0} y={0} width="100%" height="100%" style={{opacity :0.5}} />
                </SVGOverlay>
                <SVGOverlay bounds={img6}>
                    <image href={h3} x={0} y={0} width="100%" height="100%" style={{opacity :0.5}} />
                </SVGOverlay>
                <SVGOverlay bounds={img7}>
                    <image href={huricane2} x={0} y={0} width="100%" height="100%" style={{opacity :0.5}} />
                </SVGOverlay>
                <GeoJSON
                    data={countries}
                    style={styleFunction}
                    onEachFeature={onEachCity}
                />
            </MapContainer>
        </div>
    );
};

export default StormsMap;
