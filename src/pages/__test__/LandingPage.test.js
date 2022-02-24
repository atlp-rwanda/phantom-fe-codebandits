/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from '../LandingPage.js';

const wrapper = shallow(<LandingPage />);

describe('Landing page test', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });
  it('contains two child components', () => {
    expect(wrapper.children().length).toEqual(2);
  });
  it('contains the Intro child component', () => {
    expect(wrapper.find('Intro').length).toEqual(1);
  });
});
