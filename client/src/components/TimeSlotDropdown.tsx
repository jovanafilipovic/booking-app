import { useEffect, useState } from "react";
import { Dropdown } from "rsuite";
import { TimeSlot } from "../types";

interface TimeSlotDropdownProps {
  courtId: string;
  selectedDate: Date | null;
  setSelectedTimeSlot: (time: string) => void;
}

export const TimeSlotDropdown = ({
  courtId,
  selectedDate,
  setSelectedTimeSlot,
}: TimeSlotDropdownProps) => {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>("Odaberi termin");

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/api/timeslots?courtId=${courtId}&date=${selectedDate}`
        );
        const data = await response.json();
        setTimeSlots(data.timeSlots);
      } catch (error) {
        console.error("Failed to fetch time slots:", error);
      }
    };

    if (courtId && selectedDate) {
      fetchTimeSlots();
    }
  }, [courtId, selectedDate]);

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    setSelectedTimeSlot(time);
  };

  return (
    <Dropdown title={selectedTime}>
      {timeSlots.map((slot) => (
        <Dropdown.Item
          key={slot._id}
          disabled={!slot.available}
          onClick={() => handleTimeSelection(slot.time)}
        >
          {slot.time}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
