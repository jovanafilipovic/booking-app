import { Panel } from "rsuite";
import { Button } from "rsuite";
import "../styles.css";
import "../homepage.css";

interface CardProps {
  name: string;
  images: string[];
  price: string;
  address: string;
  onPreviewOpen: () => void;
}

export const Card = ({
  name,
  images,
  price,
  address,
  onPreviewOpen,
}: CardProps) => {
  const image = images.length > 0 ? images[0] : "";

  return (
    <>
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: "inline-block", width: 300 }}
      >
        <span className="sport-object-name">{name}</span>
        {image && <img src={image} height="240" width="300" alt={name} />}
        <Panel header={price}>
          <div>{address}</div>
        </Panel>
        <Button
          appearance="primary"
          className="object-preview-button"
          onClick={onPreviewOpen}
        >
          Pogledaj objekat
        </Button>
      </Panel>
    </>
  );
};
