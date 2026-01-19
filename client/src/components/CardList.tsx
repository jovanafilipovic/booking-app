import React, { useEffect, useState } from "react";
import { Card } from "./Card.tsx";
import CourtPreview from "./CourtPreview.tsx";
import { Court } from "../types";

interface CardListProps {
  selectedSport: string;
  selectedLocation: string;
}

export const CardList: React.FC<CardListProps> = ({
  selectedSport,
  selectedLocation,
}) => {
  const [courts, setCourts] = useState<Court[]>([]);
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/courts");
        const data = await response.json();

        const filteredCourts = data.courts.filter((court: Court) => {
          const sportMatch = selectedSport
            ? court.sports.includes(selectedSport)
            : true;
          const locationMatch = selectedLocation
            ? court.location === selectedLocation
            : true;
          return sportMatch && locationMatch;
        });

        setCourts(filteredCourts);
      } catch (error) {
        console.error("Failed to fetch courts:", error);
      }
    };

    fetchCourts();
  }, [selectedSport, selectedLocation]);

  const handlePreviewOpen = (court: Court) => {
    setSelectedCourt(court);
  };

  const handlePreviewClose = () => {
    setSelectedCourt(null);
  };

  return (
    <div className="cards-section">
      {courts.length === 0 ? (
        <div> Ne postoji objekat sa zadatim kriterijumima. </div>
      ) : (
        <>
          {courts.map((court) => (
            <Card
              key={court._id}
              name={court.name}
              price={court.price}
              images={court.images}
              address={court.address}
              onPreviewOpen={() => handlePreviewOpen(court)}
            />
          ))}
          {selectedCourt && (
            <CourtPreview court={selectedCourt} onClose={handlePreviewClose} />
          )}
        </>
      )}
    </div>
  );
};
