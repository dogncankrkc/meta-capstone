import React from 'react';
import RatingCard from '../common/Rating';
import { testimonialsData } from '../../data/content.js';

export default function Testimonials() {
  return (
    <div className="testimonials-content">
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <RatingCard
            key={testimonial.id}
            name={testimonial.name}
            avatar={testimonial.avatar}
            testimonial={testimonial.testimonial}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
}
