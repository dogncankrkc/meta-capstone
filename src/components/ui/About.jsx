import React from 'react'

export default function About() {
  return (
    <div className="about-content">
        <div className="about-text">
            <h2>About Little Lemon</h2>
            <p>
                Little Lemon is a family-owned Mediterranean restaurant that has <br />
                been serving delicious dishes for over 20 years. Our passion for  <br />
                authentic flavors and fresh ingredients is what sets us apart. <br />
                We take pride in creating a warm and welcoming atmosphere for  <br />
                our guests to enjoy a memorable dining experience.
            </p>
        </div>
        <div className="about-images">
            <img src="/assets/images/restaurant-interior.jpg" alt="Little Lemon Restaurant Interior" />
        </div>
    </div>
  )
}
