import React from 'react'

import restaurant1 from '../../assets/images/restaurant-1.png';
import restaurant2 from '../../assets/images/restaurant-2.png';

export default function About() {
  return (
    <div className="about-content">
        <div className="about-text">
            <h2>About Little Lemon</h2>
            <p>
                Little Lemon is a family-owned Mediterranean restaurant  <br /> that has 
                been serving delicious dishes <br /> for over 20 years. Our passion for  <br />
                authentic flavors and fresh ingredients is what sets us apart.
                We take pride in creating a warm and welcoming atmosphere  <br /> for 
                our guests to enjoy a memorable dining experience.
            </p>
        </div>
        <div className="about-images">
            <img src={restaurant1} alt="Dining room interior at Little Lemon" />
            <img src={restaurant2} alt="Chef preparing a Mediterranean dish at Little Lemon" />
        </div>
    </div>
  )
}
