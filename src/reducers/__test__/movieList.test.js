import movieListReducer from 'reducers/movieList';
import { SAVE_MOVE_LIST, FETCH_MOVIE_LIST, CLEAR_MOVIE_LIST  } from 'actions/types';

const data = {"vote_count":0,"id":162033,"video":false,"vote_average":0,"title":"The Setting Sun","popularity":0.479,"poster_path":"/44bSTbTawKAS9TON7BWesZ3mv9Y.jpg","original_language":"en","original_title":"Rakuyô","genre_ids":[],"backdrop_path":null,"adult":false,"overview":"A Japanese soldier is forced to question alliances when he meets and falls in love with the leader of the rebel movement.","release_date":"1992-09-15","full_poster_path":"https://image.tmdb.org/t/p/w500//44bSTbTawKAS9TON7BWesZ3mv9Y.jpg","full_backdrop_path":"https://image.tmdb.org/t/p/w500/null"};

it('handle actios of type FETCH_MOVIE_LIST', () => {
  const action = {
    type: FETCH_MOVIE_LIST,
    payload: data
  };
  const newState = movieListReducer([], action);
  expect(newState).toEqual([data]);
});

it('handle actios of type FETCH_MOVIE_LIST', () => {
  const action = {
    type: SAVE_MOVE_LIST,
    payload: data
  };
  const newState = movieListReducer([], action);
  expect(newState).toEqual([data]);
});

it('handle actios of type CLEAR_MOVIE_LIST', () => {
  const action = {
    type: CLEAR_MOVIE_LIST,
    payload: null
  };
  const newState = movieListReducer([], action);
  expect(newState).toEqual([].length = 0);
});

it('handle actios with unknow type', () => {
  const newState = movieListReducer([], {type: 'unknow'});
  expect(newState).toEqual([]);
});
