import { useEffect, useState } from "react";
import { Form, ButtonToolbar, Button, Schema, DatePicker } from "rsuite";
import "../styles.css";
import { TimeSlotDropdown } from "./TimeSlotDropdown.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Court } from "../types.ts";

const model = Schema.Model({
  name: Schema.Types.StringType().isRequired("This field is required."),
});

export const ReservationForm = () => {
  const { courtId } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [courtDetails, setCourtDetails] = useState<Court | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourtDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/api/courts/${courtId}`
        );
        const data = await response.json();
        setCourtDetails(data);
      } catch (error) {
        console.error("Failed to fetch court details:", error);
      }
    };

    if (courtId) {
      fetchCourtDetails();
    }
  }, [courtId]);

  if (!courtDetails) {
    return <div>Učitava se...</div>;
  }

  const handleDateChange = (value) => {
    setSelectedDate(value.toISOString().split("T")[0]);
  };

  const disablePastDates = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleReservation = async () => {
    const userString = localStorage.getItem("user");
    if (!userString) {
      navigate("/login");
      return;
    }
    const user = JSON.parse(userString);

    if (!selectedDate || !selectedTimeSlot) {
      alert("Morate izabrati datum i termin");
      return;
    }

    const reservation = {
      user: user.id,
      court: courtDetails._id,
      date: selectedDate,
      timeSlotId: selectedTimeSlot,
    };

    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found");
      }
      const response = await fetch("http://localhost:3002/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(reservation),
      });

      if (response.ok) {
        navigate("/");
        alert("Rezervacija je uspešno sačuvana.");
      } else {
        const errorData = await response.json();

        console.error("Error response:", errorData);
      }
    } catch (error) {
      console.error("Failed to save reservation:", error);
      alert("Došlo je do greške prilikom čuvanja rezervacije.");
    }
  };

  return (
    <div className="form-container">
      <Form layout="horizontal" model={model}>
        <Form.Group controlId="name-6" className="court-details">
          <Form.ControlLabel>Odabrani objekat:</Form.ControlLabel>
          <Form.ControlLabel className="court-name">
            {courtDetails.name}
          </Form.ControlLabel>
        </Form.Group>
        <Form.Group controlId="password-6">
          <Form.ControlLabel className="date-label">Datum:</Form.ControlLabel>
          <DatePicker
            onChange={handleDateChange}
            shouldDisableDate={disablePastDates}
          />
        </Form.Group>
        <Form.Group controlId="password-6">
          <Form.ControlLabel className="date-label">
            Dostupni termini za izabrani datum:
          </Form.ControlLabel>
          <TimeSlotDropdown
            courtId={courtDetails._id}
            selectedDate={selectedDate}
            setSelectedTimeSlot={setSelectedTimeSlot}
          />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" onClick={handleReservation}>
              Rezerviši
            </Button>
            <Link to="/">
              <Button appearance="default">Otkaži</Button>
            </Link>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};
