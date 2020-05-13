import {
  CHANGE_SORTING_CRITERIA,
  SHOW_MORE_REVIEWS,
  GET_REVIEWS_DATA,
} from '../constants/ratingsReviewsTypes.js';

const initState = {
  sortingCriteria: '',
  reviews: [],
  numOfShownReviews: 0,
};

const reviewsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_REVIEWS_DATA:
      return {
        ...state,
        reviews: action.payload,
      };
    case CHANGE_SORTING_CRITERIA:
      return {
        ...state,
        sortingCriteria: action.payload,
      };
    case SHOW_MORE_REVIEWS:
      return {
        ...state,
        reviews: state.numOfShownReviews + 2,
      };
    default:
      return state;
  }
};

export default reviewsReducer;
