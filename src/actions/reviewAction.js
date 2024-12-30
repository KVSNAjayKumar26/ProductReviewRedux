export const ADD_REVIEW = 'ADD_REVIEW';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';

export const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review,
});

export const fetchREviews = (reviews) => ({
    type: FETCH_REVIEWS,
    payload: reviews,
});