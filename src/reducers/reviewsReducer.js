import { ADD_REVIEW, FETCH_REVIEWS } from "../actions/reviewAction";


const initialState = {
    reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
            };
        case FETCH_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
            };
        default:
            return state;
    }
};

export default reviewsReducer;