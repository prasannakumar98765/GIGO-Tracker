import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import socket from "../socket";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Global Leaflet for plugin to extend Marker prototype
window.L = L;
import "leaflet.marker.slideto";

// ✅ Fix marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const AnimatedMarkers = ({ executives }) => {
  const map = useMap();
  const markerRefs = useRef({});

  useEffect(() => {
    const handleUpdate = (data) => {
      console.log("📍 Live update received:", data);

      const marker = markerRefs.current[data.executiveId];
      if (marker && typeof marker.slideTo === "function") {
        marker.slideTo([data.lat, data.lan], {
          duration: 1000,
          keepAtCenter: false,
        });
      } else if (marker) {
        marker.setLatLng([data.lat, data.lan]);
      } else {
        console.warn("❌ Marker not found for", data.executiveId);
      }
    };

    socket.on("executiveLocationUpdated", handleUpdate);
    return () => socket.off("executiveLocationUpdated", handleUpdate);
  }, []);

  return (
    <>
      {Object.values(executives).map((exec) => {
        const lat = exec.currentLocation?.lat;
        const lon = exec.currentLocation?.lan;
        if (!lat || !lon) return null;

        return (
          <Marker
            key={exec._id}
            position={[lat, lon]}
            ref={(marker) => {
              if (marker) {
                // Access underlying Leaflet marker instance
                markerRefs.current[exec._id] = marker;
              }
            }}
          >
            <Popup>
              <strong>{exec.name}</strong> <br />
              Status: {exec.status} <br />
              Updated at: {exec.lastUpdated}
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

const MapView = () => {
  const [executives, setExecutives] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/api/delivery/executives")
      .then((res) => res.json())
      .then((data) => {
        const execMap = {};
        data.forEach((exec) => {
          execMap[exec._id] = {
            ...exec,
            lastUpdated: new Date(exec.lastUpdated).toISOString(),
          };
        });
        setExecutives(execMap);
      });
  }, []);

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AnimatedMarkers executives={executives} />
    </MapContainer>
  );
};

export default MapView;
