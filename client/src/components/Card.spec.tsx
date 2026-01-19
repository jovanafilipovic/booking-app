import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card component", () => {
  const mockOnPreviewOpen = jest.fn();
  const cardProps = {
    name: "Teniski tereni Djokovic",
    images: ["https://example.com/image.jpg"],
    price: "1000din",
    address: "Vojvode Stepe 330",
    onPreviewOpen: mockOnPreviewOpen,
  };

  test("should display name, image, price, and address", () => {
    render(<Card {...cardProps} />);

    expect(screen.getByText(cardProps.name)).toBeInTheDocument();
    expect(screen.getByText(cardProps.price)).toBeInTheDocument();
    expect(screen.getByText(cardProps.address)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: cardProps.name })).toHaveAttribute(
      "src",
      cardProps.images[0]
    );
  });

  test("should handle preview button click", () => {
    render(<Card {...cardProps} />);

    fireEvent.click(screen.getByRole("button", { name: "Pogledaj objekat" }));
    expect(mockOnPreviewOpen).toHaveBeenCalled();
  });

  test("should handle case when no images are provided", () => {
    const noImageProps = { ...cardProps, images: [] };
    render(<Card {...noImageProps} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
