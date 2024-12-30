import React from 'react';
import { useSelector } from 'react-redux';
import './ReviewList.css';

const ReviewList = () => {
  const reviews = useSelector((state) => state.reviews.reviews);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index}>
            <p>{review.review}</p>
            <p>Rating: {review.rating} Star{review.rating > 1 ? 's' : ''}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
