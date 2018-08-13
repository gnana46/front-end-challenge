import {
    SAVE_MOVE_LIST,
    FETCH_MOVIE_LIST,
    CLEAR_MOVIE_LIST
  } from 'actions/types';
  
  export default function (state = [], action) {
    
    switch (action.type) {
      case FETCH_MOVIE_LIST:
        return [...state, action.payload];
      case SAVE_MOVE_LIST:
        return [...state, action.payload];
        case CLEAR_MOVIE_LIST:
        return state.length = 0;
      default:
        return state;
    }
    
  }
  
