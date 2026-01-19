import { useEffect, useState } from "react";
import { Dropdown } from "rsuite";
import { Location } from "../types";

interface LocationDropdownProps {
  setLocation: (location: string) => void;
}

export const LocationDropdown = ({ setLocation }: LocationDropdownProps) => {
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

  const handleLocationSelection = (locationId: string, location: string) => {
    setSelectedLocation(location);
    setLocation(locationId);
  };

  return (
    <Dropdown title={selectedLocation}>
      {locations.map((location) => (
        <Dropdown.Item
          key={location._id}
          onClick={(event) => {
            event.preventDefault();
            handleLocationSelection(location._id, location.name);
          }}
        >
          {location.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
