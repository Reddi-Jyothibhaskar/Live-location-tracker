import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function RecenterMap({ position }) {
  const map = useMap();

  if (position) {
    map.setView(position, map.getZoom(), {
      animate: true,
    });
  }

  return null;
}

export default function MapView({ position }) {
  if (!position) return <p>Fetching location...</p>;

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>

      <RecenterMap position={position} />
    </MapContainer>
  );
}
