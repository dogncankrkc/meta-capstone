import React from 'react'
import HeroImage from "../../assets/images/hero-image.jpg";
import Button from '../common/Button';

export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, <br /> focused on traditional recipes served with a modern twist.</p>
            <Button text="Reserve a Table" />
        </div>

        <div className="hero-image">
            <img  src={HeroImage} alt="Little Lemon Hero" />
        </div>
    </div>
  )
}
