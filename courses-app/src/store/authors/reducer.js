import * as actionTypes from './actionTypes';

const initialState = {
  authors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTHORS:
      return {
        ...state,
        authors: action.authors
      };
    default:
      return state;
  }
};

export default reducer;
