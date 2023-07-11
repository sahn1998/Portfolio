import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { GeoJSON } from 'react-leaflet';
import data from './geo.json'
import 'leaflet/dist/leaflet.css';

import axios from 'axios';

export async function fetchGeoJSON(filePath: string): Promise<any> {
    const response = await fetch(filePath);
    const data = await response.json();
    return data;
}

export const SeoulChoroplethMap = () => {
    const [geojsonData, setGeojsonData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./geo.geojson');
                console.log(response); // Log the response object to inspect its contents
                const data = await response.json();
                setGeojsonData(data);   
            } catch (error) {
              console.error('Error fetching GeoJSON:', error);
            }
          };
        fetchData();

    }, []);

    const style = (() => {
        return ({
            fillColor: "YlBuGn",
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '2',
            fillOpacity: 0.9
        });
    });

    return (
        <MapContainer
            center={[37.541, 126.986]}
            zoom={11}
            minZoom={10}
            maxZoom={14}
            style={{ height: '100vh', width: '100vw' }}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={data} style={style} />
        </MapContainer>
    );
};