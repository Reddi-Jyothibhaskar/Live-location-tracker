import { useEffect, useState } from "react";
import MapView from "./MapView";

export default function App() {
  const [position, setPosition] = useState([17.6868, 83.2185]);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const coords = [
          pos.coords.latitude,
          pos.coords.longitude,
        ];
        setPosition(coords);
      },
      (err) => {
        console.error("Location error:", err);
      },
      {
        enableHighAccuracy: true,
      }
    );

    // Cleanup watcher on unmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return <MapView position={position} />;
}
