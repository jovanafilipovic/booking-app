import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ReservationForm } from "./ReservationForm";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("ReservationForm", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    localStorage.clear();
  });

  const mockCourtData = {
    _id: "1",
    name: "Test Court",
    images: ["https://example.com/image.jpg"],
    price: "100 EUR",
    address: "123 Test Street",
    sports: ["tennis"],
    location: "Test City",
  };

  test("renders initial state correctly", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockCourtData));

    render(
      <MemoryRouter initialEntries={["/reservation/1"]}>
        <Routes>
          <Route path="/reservation/:courtId" element={<ReservationForm />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Court")).toBeInTheDocument();
    });

    expect(screen.getByText("Datum:")).toBeInTheDocument();
    expect(
      screen.getByText("Dostupni termini za izabrani datum:")
    ).toBeInTheDocument();
  });

  test("handles successful reservation", async () => {
    fetchMock.mockResponses(
      [JSON.stringify(mockCourtData), { status: 200 }],
      [
        JSON.stringify({
          id: "123",
          user: "1",
          court: "1",
          date: "2024-07-15",
          timeSlotId: "123",
        }),
        { status: 200 },
      ]
    );

    localStorage.setItem("user", JSON.stringify({ id: "user-1" }));
    localStorage.setItem("accessToken", "fake-token");

    render(
      <MemoryRouter initialEntries={["/reservation/1"]}>
        <Routes>
          <Route path="/reservation/:courtId" element={<ReservationForm />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Court")).toBeInTheDocument();
    });

    const dateInput = screen.getByText("Datum:");
    fireEvent.change(dateInput, { target: { value: "2024-07-15" } });

    const timeSlotSelect = screen.getByTestId("timeslot-dropdown");
    fireEvent.change(timeSlotSelect, { target: { value: "timeSlot-1" } });

    const reserveButton = screen.getByText("Rezerviši");
    fireEvent.click(reserveButton);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "http://localhost:3002/api/reservations",
        expect.any(Object)
      );
    });
  });

  test("handles reservation error", async () => {
    fetchMock.mockResponses(
      [JSON.stringify(mockCourtData), { status: 200 }],
      ["", { status: 500 }]
    );

    localStorage.setItem("user", JSON.stringify({ id: "user-1" }));
    localStorage.setItem("accessToken", "fake-token");

    render(
      <MemoryRouter initialEntries={["/reservation/1"]}>
        <Routes>
          <Route path="/reservation/:courtId" element={<ReservationForm />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Test Court")).toBeInTheDocument();
    });

    const dateInput = screen.getByText("Datum:");
    fireEvent.change(dateInput, { target: { value: "2024-07-15" } });

    const timeSlotSelect = screen.getByTestId("timeslot-dropdown");
    fireEvent.change(timeSlotSelect, { target: { value: "timeSlot-1" } });

    const reserveButton = screen.getByText("Rezerviši");
    fireEvent.click(reserveButton);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "http://localhost:3002/api/reservations"
      );
    });
    expect(
      screen.getByText("Došlo je do greške prilikom čuvanja rezervacije.")
    ).toBeInTheDocument();
  });
});
