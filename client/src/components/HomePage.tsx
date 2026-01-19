import { useEffect, useState } from "react";
import { SportDropdown } from "./SportDropdown.tsx";
import { LocationDropdown } from "./LocationDropdown.tsx";
import "../homepage.css";
import { Button } from "rsuite";
import { CardList } from "./CardList.tsx";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types";

export const HomePage = () => {
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    if (accessToken && storedUser) {
      setIsLoggedIn(true);
      const userData = JSON.parse(storedUser) as User;
      setUsername(userData.username);
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login");
  };

  return (
    <>
      <div className="header-section">
        <div className="dropdowns-section">
          <SportDropdown setSelectedSport={setSelectedSport} />
          <LocationDropdown setLocation={setSelectedLocation} />
        </div>
        <div className="account-info-section">
          {isLoggedIn ? (
            <div className="logout-section">
              <span>
                Dobrodošli,<b> {username}</b>!
              </span>

              <Button appearance="ghost" onClick={handleLogout}>
                Odjavi se
              </Button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <Button appearance="primary">Uloguj se</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="homepage">
        <CardList
          selectedSport={selectedSport}
          selectedLocation={selectedLocation}
        />
      </div>
    </>
  );
};
