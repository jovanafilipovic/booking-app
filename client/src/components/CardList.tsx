import React, { useEffect, useState } from "react";
import { Card } from "./Card.tsx";

interface Court {
  name: string;
  images: string[];
  price: string;
  address: string;
}

export const CardList = () => {
  const [courts, setCourts] = useState<Court[]>([]);

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/courts");
        const data = await response.json();
        setCourts(data.courts);
      } catch (error) {
        console.error("Failed to fetch courts:", error);
      }
    };

    fetchCourts();
  }, []);

  return (
    <div className="cards-section">
      {courts.map((court, index) => (
        <Card
          key={index}
          name={court.name}
          price={court.price}
          images={court.images}
          address={court.address}
        />
      ))}
    </div>
  );
};
