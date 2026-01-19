import { Drawer, Button, Carousel } from "rsuite";
import { useNavigate } from "react-router-dom";
import { Court } from "../types.ts";
import { GoogleMaps } from "./GoogleMaps.tsx";

interface CourtPreviewProps {
  court: Court;
  onClose?: () => void;
}

const CourtPreview = ({ court, onClose }: CourtPreviewProps) => {
  const navigate = useNavigate();

  const startReservationProcess = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate(`/reservation/${court._id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <Drawer open={!!court} onClose={onClose}>
      <Drawer.Header>
        <Drawer.Title className="court-preview-title">
          {court.name}
        </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <Carousel autoplay>
          {court.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={court.name}
              style={{ width: "100%" }}
            />
          ))}
        </Carousel>
        <div className="court-info">
          <div className="court-preview-price">{court.price}</div>
          <div className="court-preview-address">{court.address}</div>
          <GoogleMaps court={court} />
        </div>
        <div className="reserve-button-preview">
          <Button
            appearance="primary"
            onClick={startReservationProcess}
            className="start-reserve"
          >
            Rezerviši
          </Button>
        </div>
      </Drawer.Body>
    </Drawer>
  );
};

export default CourtPreview;
