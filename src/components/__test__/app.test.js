import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import Header from 'components/header';
import Footer from 'components/footer';

let wrapped;

beforeEach( () => {
   wrapped = shallow(<App />);
});

afterEach(() =>{
    wrapped.unmount();
});

it('Shows a Header & Footer', () => {
  expect(wrapped.find(Header).length).toEqual(1);
  expect(wrapped.find(Footer).length).toEqual(1);
});