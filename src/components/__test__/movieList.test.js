import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import MovieList from 'components/movieList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    movieList: [{"vote_count":0,"id":162033,"video":false,"vote_average":0,"title":"The Setting Sun","popularity":0.479,"poster_path":"/44bSTbTawKAS9TON7BWesZ3mv9Y.jpg","original_language":"en","original_title":"Rakuyô","genre_ids":[],"backdrop_path":null,"adult":false,"overview":"A Japanese soldier is forced to question alliances when he meets and falls in love with the leader of the rebel movement.","release_date":"1992-09-15","full_poster_path":"https://image.tmdb.org/t/p/w500//44bSTbTawKAS9TON7BWesZ3mv9Y.jpg","full_backdrop_path":"https://image.tmdb.org/t/p/w500/null"}, 
    {"vote_count":0,"id":162034,"video":false,"vote_average":0,"title":"Time","popularity":0.479,"poster_path":"/44bSTbTawKAS9TON7BWesZ3mv9Y.jpg","original_language":"en","original_title":"Rakuyô","genre_ids":[],"backdrop_path":null,"adult":false,"overview":"A Japanese soldier is forced to question alliances when he meets and falls in love with the leader of the rebel movement.","release_date":"1992-09-15","full_poster_path":"https://image.tmdb.org/t/p/w500//44bSTbTawKAS9TON7BWesZ3mv9Y.jpg","full_backdrop_path":"https://image.tmdb.org/t/p/w500/null"}]
  }
   wrapped = mount(
     <Root initialState={initialState}>
        <MemoryRouter>
            <MovieList />
        </MemoryRouter>
     </Root>
   );
});

afterEach(() =>{
  wrapped.unmount();
});

it('creates one li per movie', () => {
    expect(wrapped.find('.list-item').length).toEqual(2);
});

it('shows the text for each movie', () => {
    expect(wrapped.render().find('.item-title').first().text()).toEqual("The Setting Sun 1992-09-15");
    expect(wrapped.render().find('.item-title').last().text()).toEqual("Time 1992-09-15");
});