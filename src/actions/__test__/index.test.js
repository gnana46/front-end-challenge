import { saveMovieList } from 'actions';
import {SAVE_MOVE_LIST} from 'actions/types';

const data = {"vote_count":0,"id":162033,"video":false,"vote_average":0,"title":"The Setting Sun","popularity":0.479,"poster_path":"/44bSTbTawKAS9TON7BWesZ3mv9Y.jpg","original_language":"en","original_title":"Rakuyô","genre_ids":[],"backdrop_path":null,"adult":false,"overview":"A Japanese soldier is forced to question alliances when he meets and falls in love with the leader of the rebel movement.","release_date":"1992-09-15","full_poster_path":"https://image.tmdb.org/t/p/w500//44bSTbTawKAS9TON7BWesZ3mv9Y.jpg","full_backdrop_path":"https://image.tmdb.org/t/p/w500/null"};

describe('saveMovie', () => {

  it('has the correct type', () => {
    const action = saveMovieList();
    expect(action.type).toEqual(SAVE_MOVE_LIST);
  });

  it('has the correct payload', () => {
    const action = saveMovieList(data);
    expect(action.payload).toEqual(data);
  });

})
