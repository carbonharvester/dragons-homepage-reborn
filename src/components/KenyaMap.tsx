
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

// Kenya's coordinates
const center = {
  lat: -1.2921,
  lng: 36.8219 // Nairobi coordinates as center
};

// Map container style
const containerStyle = {
  width: '100%',
  height: '100%'
};

// Map options
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeId: 'terrain'
};

// City coordinates
const cities = [
  { name: "Nairobi", position: { lat: -1.2921, lng: 36.8219 }, isPrimary: true },
  { name: "Mombasa", position: { lat: -4.0435, lng: 39.6682 }, isPrimary: false },
  { name: "Kisumu", position: { lat: -0.1022, lng: 34.7617 }, isPrimary: false }
];

const KenyaMap = () => {
  // Load the Google Maps JavaScript API
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDHLg92xIJOAkp25amMXRRk83Wve2' + 'rFuR8" // This is a public API key for this demo
  });

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <AspectRatio ratio={16/9} className="relative">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
            options={options}
          >
            {/* City Markers */}
            {cities.map((city, index) => (
              <Marker
                key={index}
                position={city.position}
                title={city.name}
                label={{
                  text: city.name,
                  className: `bg-white px-2 py-1 rounded-full shadow-md text-xs font-semibold ${
                    city.isPrimary ? 'text-dragon' : 'text-dragon-dark'
                  }`
                }}
                animation={city.isPrimary ? window.google.maps.Animation.BOUNCE : undefined}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: city.isPrimary ? 8 : 6,
                  fillColor: city.isPrimary ? '#245745' : '#224155',
                  fillOpacity: 0.9,
                  strokeWeight: 2,
                  strokeColor: 'white',
                }}
              />
            ))}
            <></>
          </GoogleMap>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="text-dragon-dark">Loading map...</div>
          </div>
        )}

        {/* Overlay title */}
        <div className="absolute top-4 left-4 z-10">
          <h3 className="text-sm md:text-base font-serif font-semibold text-white bg-dragon-dark/70 px-3 py-1 rounded-md">Kenya, East Africa</h3>
        </div>
      </AspectRatio>
    </div>
  );
};

export default KenyaMap;
