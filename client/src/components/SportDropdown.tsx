import React, { useEffect, useState } from "react";
import { Dropdown } from "rsuite";

interface Sport {
  _id: string;
  name: string;
}
export const SportDropdown = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [selectedSport, setSelectedSport] = useState<string>("Sport");

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/sports");

        const data = await response.json();
        setSports(data.sports);
      } catch (error) {
        console.error("Failed to fetch sports:", error);
      }
    };

    fetchSports();
  }, []);

  const handleSportSelection = (sport: string) => {
    setSelectedSport(sport);
  };

  return (
    <Dropdown title={selectedSport}>
      {sports.map((sport) => (
        <Dropdown.Item
          key={sport._id}
          onClick={(event) => {
            event.preventDefault();
            handleSportSelection(sport.name);
          }}
        >
          {sport.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
