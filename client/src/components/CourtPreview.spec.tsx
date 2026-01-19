import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useNavigate } from "react-router-dom";
import CourtPreview from "./CourtPreview";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("CourtPreview", () => {
  const court = {
    _id: "1",
    name: "Teniski tereni Djokovic",
    images: ["https://example.com/image.jpg"],
    price: "1200din",
    address: "Kralja Petra 5",
    sports: ["tenis"],
    location: {
      lat: 45.1234,
      lng: 15.6789,
    },
  };

  beforeEach(() => {
    localStorage.clear();
  });

  test("renders CourtPreview component", () => {
    render(<CourtPreview court={court} />);

    expect(screen.getByText("Teniski tereni Djokovic")).toBeInTheDocument();
    expect(screen.getByText("1200din")).toBeInTheDocument();
    expect(screen.getByText("Kralja Petra 5")).toBeInTheDocument();
    expect(screen.getByText("Rezerviši")).toBeInTheDocument();
  });

  test("handles start reservation process when user is logged in", () => {
    const mockUser = { id: "user123" };
    localStorage.setItem("user", JSON.stringify(mockUser));

    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<CourtPreview court={court} />);

    fireEvent.click(screen.getByText("Rezerviši"));

    expect(mockNavigate).toHaveBeenCalledWith(`/reservation/${court._id}`);
  });

  test("handles start reservation process when user is not logged in", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<CourtPreview court={court} />);

    fireEvent.click(screen.getByText("Rezerviši"));

    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
