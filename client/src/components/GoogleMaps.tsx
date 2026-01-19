import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Court } from "../types";

interface SimpleMapProps {
  court: Court;
}

export function GoogleMaps({ court }: SimpleMapProps) {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

  useEffect(() => {
    const geocodeAddress = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            court.address
          )}&key=${apiKey}`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoordinates({ lat, lng });
        } else {
          throw new Error("No results found");
        }
      } catch (error) {
        console.error("Error geocoding address:", error);
      } finally {
        setLoading(false);
      }
    };

    geocodeAddress();
  }, [court.address]);

  if (loading) return <div>Loading map...</div>;

  if (!coordinates) {
    return (
      <div>
        Failed to load map. Please check the address or try again later.
      </div>
    );
  }

  if (!apiKey) {
    throw new Error("Google Maps API key is not defined in .env");
  }

  return (
    <div style={{ height: "40vh", width: "100%" }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: court.location.lat, lng: court.location.lng }}
        defaultZoom={11}
      /> */}
    </div>
  );
}
