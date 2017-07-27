/* global expect */
import React from 'react';
import * as enzyme from 'enzyme';
import Intro from './Intro';

it('renders the title', () => {
  const intro = enzyme.shallow(<Intro />);
  expect(intro.find('h1').text()).toEqual('Github Profile');
});
