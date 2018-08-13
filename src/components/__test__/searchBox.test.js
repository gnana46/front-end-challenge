import React from 'react';
import { mount } from 'enzyme';
import SearchBox from 'components/searchBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
   wrapped = mount(
     <Root>
       <SearchBox />
     </Root>
   );
});

afterEach(() =>{
  wrapped.unmount();
});

it('has a search input and a button', () => {
    expect(wrapped.find('input').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
});

describe('the search input', () => {

  beforeEach(() => {
    wrapped.find('input').simulate('change', {
      target: { value: 'movie title'}
    });
    wrapped.update();
  });

  it('has a input that user can type in', () => {
    expect(wrapped.find('input').prop('value')).toEqual('movie title');
  })


})
