import React from "react";
import { Panel } from "rsuite";
import "../styles.css";
import "../homepage.css";

interface CardProps {
  name: string;
  images: string[];
  price: string;
  address: string;
}

export const Card = ({ name, images, price, address }: CardProps) => {
  const image = images.length > 0 ? images[0] : "";

  return (
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
    </Panel>
  );
};
