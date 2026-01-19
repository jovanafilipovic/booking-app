import { useEffect, useState } from "react";
import { Dropdown } from "rsuite";
import { Sport } from "../types";

interface SportDropdownProps {
  setSelectedSport: (sport: string) => void;
}

export const SportDropdown = ({ setSelectedSport }: SportDropdownProps) => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [selectedSport, setLocalSelectedSport] = useState<string>("Sport");

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

  const handleSportSelection = (sportId: string, sport: string) => {
    setLocalSelectedSport(sport);
    setSelectedSport(sportId);
  };

  return (
    <Dropdown title={selectedSport}>
      {sports.map((sport) => (
        <Dropdown.Item
          key={sport._id}
          onClick={(event) => {
            event.preventDefault();
            handleSportSelection(sport._id, sport.name);
          }}
        >
          {sport.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
