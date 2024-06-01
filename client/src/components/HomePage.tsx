import React from "react";
import { SportDropdown } from "./SportDropdown.tsx";
import { LocationDropdown } from "./LocationDropdown.tsx";
import "../homepage.css";
import { Button } from "rsuite";
import { CardList } from "./CardList.tsx";

export const HomePage = () => {
  return (
    <div className="homepage">
      <div className="dropdowns-section">
        <SportDropdown />
        <LocationDropdown />
        <Button appearance="primary">Uloguj se</Button>
      </div>
      <CardList />
    </div>
  );
};
