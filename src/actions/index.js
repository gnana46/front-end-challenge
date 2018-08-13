
import axios from 'axios';
import {FETCH_MOVIE_LIST, SAVE_MOVE_LIST, SAVE_RECENT_LIST, CLEAR_MOVIE_LIST} from 'actions/types';




export function fetchMovieList(query, callback) {
  const request=  axios.get(`https://sbot-fe-test.herokuapp.com/api/v1/movies?query=${query}`).then(response => {
    // handle success
    callback(response);
    return{
      type: FETCH_MOVIE_LIST,
      payload: response.data
    }
    
  }).catch( error =>{
    callback(error)
    console.log(error);
  });
  return request;
}

export function saveMovieList(data) {

    return{
      type: SAVE_MOVE_LIST,
      payload: data
    }
    
}

export function saveRecentView(data) {
  return{
    type: SAVE_RECENT_LIST,
    payload: data
  }
  
}

export function clearMovieList() {
  return{
    type: CLEAR_MOVIE_LIST,
    payload: null
  }
  
}