import React, { useEffect, useState } from "react";
import { Dropdown } from "rsuite";

interface Location {
  _id: string;
  name: string;
}
export const LocationDropdown = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("Lokacija");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/locations");
        const data = await response.json();
        setLocations(data.locations);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };

    fetchLocations();
  }, []);

  const handleLocationSelection = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <Dropdown title={selectedLocation}>
      {locations.map((location) => (
        <Dropdown.Item
          key={location._id}
          onClick={(event) => {
            event.preventDefault();
            handleLocationSelection(location.name);
          }}
        >
          {location.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
