'use client';

// @ts-ignore
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { useState, useEffect } from 'react';

const INDIA_TOPO_URL = '/india.json';

const incubationMarkers = [
  { name: 'Delhi', coordinates: [77.209, 28.614] as [number, number], count: 38 },
  { name: 'Mumbai', coordinates: [72.878, 19.076] as [number, number], count: 31 },
  { name: 'Bangalore', coordinates: [77.595, 12.972] as [number, number], count: 45 },
  { name: 'Hyderabad', coordinates: [78.487, 17.385] as [number, number], count: 29 },
  { name: 'Chennai', coordinates: [80.271, 13.083] as [number, number], count: 22 },
  { name: 'Kolkata', coordinates: [88.364, 22.573] as [number, number], count: 21 },
  { name: 'Ahmedabad', coordinates: [72.571, 23.023] as [number, number], count: 16 },
  { name: 'Jaipur', coordinates: [75.787, 26.912] as [number, number], count: 12 },
  { name: 'Pune', coordinates: [73.857, 18.52] as [number, number], count: 18 },
];

export function IndiaMap() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // New Blue Theme Color
  const primaryBlue = "#3B82F6";
  const hoverBlue = "#2563EB";
  const lightBlueText = "#93C5FD";

  if (!isMounted) {
    return (
      <div className="relative w-full max-w-[500px] mx-auto" style={{ aspectRatio: '3/4' }}>
        <div className="absolute inset-0 bg-blue-500/5 rounded-3xl" />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[500px] mx-auto" style={{ aspectRatio: '3/4' }}>
      {/* Ambient glow - Changed to Blue */}
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [82.8, 22.5], scale: 900 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={INDIA_TOPO_URL}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const stateName: string = geo.properties?.st_nm || '';
              const isHovered = hoveredState === stateName;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setHoveredState(stateName)}
                  onMouseLeave={() => setHoveredState(null)}
                  style={{
                    default: {
                      fill: isHovered ? primaryBlue : '#e5e7eb',
                      stroke: '#ffffff',
                      strokeWidth: 0.5,
                      outline: 'none',
                      transition: 'fill 0.15s ease',
                    },
                    hover: {
                      fill: primaryBlue,
                      stroke: '#ffffff',
                      strokeWidth: 0.8,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: hoverBlue,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* City markers - Changed to Blue */}
        {incubationMarkers.map((marker) => (
          <Marker
            key={marker.name}
            coordinates={marker.coordinates}
            onMouseEnter={() => setHoveredMarker(marker.name)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <circle r={10} fill={primaryBlue} fillOpacity={0.2} className="animate-ping" />
            <circle
              r={4}
              fill={primaryBlue}
              stroke="#ffffff"
              strokeWidth={1.5}
              style={{ cursor: 'pointer', filter: `drop-shadow(0 0 4px ${primaryBlue})` }}
            />
            {hoveredMarker === marker.name && (
              <g transform="translate(-36, -50)">
                <rect x={0} y={0} width={72} height={32} rx={6} fill="rgba(17,24,39,0.95)" />
                <text x={36} y={12} textAnchor="middle" fill="#fff" fontSize={8} fontWeight="700" fontFamily="system-ui">
                  {marker.name}
                </text>
                <text x={36} y={24} textAnchor="middle" fill={lightBlueText} fontSize={7.5} fontFamily="system-ui">
                  {marker.count} Centers
                </text>
              </g>
            )}
          </Marker>
        ))}
      </ComposableMap>

      {/* Hovered state tooltip */}
      {hoveredState && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-full pointer-events-none shadow-xl whitespace-nowrap z-20">
          📍 {hoveredState}
        </div>
      )}

      {/* Stat badges - Text color changed to Blue */}
      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-3 shadow-xl pointer-events-none">
        <div className="text-blue-600 font-black text-2xl leading-none">28+</div>
        <div className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1">States</div>
      </div>
      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-3 shadow-xl pointer-events-none">
        <div className="text-blue-600 font-black text-2xl leading-none">300+</div>
        <div className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1">Centers</div>
      </div>
    </div>
  );
}