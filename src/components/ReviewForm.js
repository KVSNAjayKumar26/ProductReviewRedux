import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addReview } from '../actions/reviewAction';
import './ReviewForm.css';

const ReviewForm = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { review, rating };
        dispatch(addReview(newReview));
        setReview('');
        setRating(1);
    };

  return (
    <form onSubmit={handleSubmit}>
        <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder='Write your review here...'
        required
        />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1,2,3,4,5].map((star) => (
                <option key={star} value={star}>
                    {star} Star{star > 1 ? 's' : ''}
                </option>
            ))}
        </select>
        <button type='submit'>Submit Review</button>
    </form>
  );
};

export default ReviewForm;