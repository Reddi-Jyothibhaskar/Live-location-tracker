import { useEffect, useState } from "react";
import MapView from "./MapView";

export default function App() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([
          pos.coords.latitude,
          pos.coords.longitude,
        ]);
      },
      (err) => {
        setError(err.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 60000,
      }
    );
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!position) return <p>Fetching location…</p>;

  return <MapView position={position} />;
}
