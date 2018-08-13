import {combineReducers} from 'redux';
import moviesReducer from 'reducers/movieList';
import recentList from 'reducers/recentList';

export default combineReducers({
  movieList: moviesReducer,
  recentList: recentList
})
