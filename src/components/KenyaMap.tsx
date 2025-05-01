
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { School, MapPin } from "lucide-react";

// Kirigu Primary School coordinates (approximate based on Nairobi area)
const kirigu = {
  name: "Kirigu Primary School",
  lat: -1.3021,
  lng: 36.7719 // Approximate coordinates for Kirigu area in Nairobi
};

// Other city coordinates
const cities = [
  { name: "Nairobi", position: { lat: -1.2921, lng: 36.8219 }, isPrimary: false },
  { name: "Mombasa", position: { lat: -4.0435, lng: 39.6682 }, isPrimary: false },
  { name: "Kisumu", position: { lat: -0.1022, lng: 34.7617 }, isPrimary: false }
];

// For demo purposes using a public token - in production this should be replaced with your token
// This is intentionally a temporary public token
const MAPBOX_TOKEN = 'pk.eyJ1IjoibG92YWJsZS1haS1kZW1vIiwiYSI6ImNscWt4cG40djFiY3EycW85anNrMDJmNzkifQ.l4gAw9DgXIYm6X9HafKTUQ';

const KenyaMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [tokenInput, setTokenInput] = useState('');
  const [useCustomToken, setUseCustomToken] = useState(false);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Use custom token if provided, otherwise use the demo token
    const token = useCustomToken && tokenInput ? tokenInput : MAPBOX_TOKEN;
    
    // Initialize map
    mapboxgl.accessToken = token;
    
    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [kirigu.lng, kirigu.lat],
      zoom: 12,
      pitch: 30,
      attributionControl: true
    });

    map.current = newMap;

    // Add navigation controls
    newMap.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Wait for map to load before adding markers
    newMap.on('load', () => {
      setMapLoaded(true);
      
      // Add Kirigu Primary School marker
      const kirigiMarkerElement = document.createElement('div');
      kirigiMarkerElement.className = 'flex flex-col items-center';
      kirigiMarkerElement.innerHTML = `
        <div class="relative animate-bounce mb-1">
          <div class="text-dragon fill-dragon-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-school"><path d="M4 10a3 3 0 0 1 3-3h14"></path><path d="M7 10v-2a3 3 0 0 1 6 0v2"></path><path d="M12 10h3m-1.5 1h1.5m-1.5 1h0m-.5 1h1.5m-1.5 1h0m-.5 1h1.5m-.5 1h0m-8 0h3"></path><path d="M10 10v8"></path><path d="M2 18L22 18v-2a2 2 0 0 0 -2 -2h-16a2 2 0 0 0 -2 2z"></path></svg>
          </div>
          <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-dragon"></div>
        </div>
      `;

      // Add popup for Kirigu Primary School
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="px-2 py-1 text-xs font-semibold text-dragon-dark">
            <strong>Kirigu Primary School</strong>
            <div class="text-[10px] text-gray-600">Food For Education Project</div>
          </div>
        `);

      new mapboxgl.Marker(kirigiMarkerElement)
        .setLngLat([kirigu.lng, kirigu.lat])
        .setPopup(popup)
        .addTo(newMap);

      // Add city markers
      cities.forEach((city) => {
        const cityMarkerElement = document.createElement('div');
        cityMarkerElement.className = 'flex flex-col items-center';
        cityMarkerElement.innerHTML = `
          <div class="text-dragon-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
        `;

        // Add popup for city
        const cityPopup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="px-2 py-0.5 text-xs font-semibold text-dragon-gray">
              ${city.name}
            </div>
          `);

        new mapboxgl.Marker(cityMarkerElement)
          .setLngLat([city.position.lng, city.position.lat])
          .setPopup(cityPopup)
          .addTo(newMap);
      });

      // Add a 3D building layer for more context
      newMap.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      }, 'road-label');
    });

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [useCustomToken, tokenInput]);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <AspectRatio ratio={16/9}>
        <div className="w-full h-full relative">
          <div ref={mapContainerRef} className="absolute inset-0" />
          
          {/* Overlay title */}
          <div className="absolute top-4 left-4 z-10">
            <h3 className="text-sm md:text-base font-serif font-semibold text-white bg-dragon-dark/70 px-3 py-1 rounded-md">
              Kenya, East Africa
            </h3>
          </div>
          
          {/* Optional custom token input for development */}
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-dragon-beige/20">
              <div className="text-center px-4 py-3 bg-white rounded-lg shadow-lg">
                <p className="text-dragon-dark mb-2">Loading map...</p>
                <div className="w-16 h-16 border-4 border-dragon border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            </div>
          )}
        </div>
      </AspectRatio>
    </div>
  );
};

export default KenyaMap;
