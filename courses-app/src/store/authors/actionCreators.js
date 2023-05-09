import * as actionTypes from './actionTypes';

export const setAuthors = (authors) => {
  return {
    type: actionTypes.SET_AUTHORS,
    authors: authors
  };
};