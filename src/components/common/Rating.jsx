import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function RatingCard({ name, avatar, testimonial, rating = 5 }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="rating-card">
      <div className="rating-stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="rating-star" />
        ))}
      </div>

      <div className="rating-user">
        {avatar ? (
          <img
            className="rating-avatar"
            src={avatar}
            alt={`${name} avatar`}
          />
        ) : (
          <div className="rating-avatar rating-avatar-fallback" aria-hidden="true">
            {initials}
          </div>
        )}

        <h3 className="rating-name">{name}</h3>
      </div>

      <p className="rating-comment">{testimonial}</p>
    </article>
  );
}
