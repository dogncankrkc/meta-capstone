import React from "react";
import Card from "../common/Card";
import { specialsData } from "../../data/content.js";
import Button from "../common/Button.jsx";

export default function Specials() {
  return (
    <div className="specials-content">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <Button text="Online Menu" />
      </div>
      <div className="specials">
        {specialsData.map((special) => (
          <Card
            key={special.id}
            image={special.image}
            title={special.title}
            description={special.description}
            price={special.price}
            cta={special.cta}
            icon={special.icon}
          />
        ))}
      </div>
    </div>
  );
}
