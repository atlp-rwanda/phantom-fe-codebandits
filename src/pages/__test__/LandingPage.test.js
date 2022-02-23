/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import LandingPage from '../LandingPage.js';

const wrapper = shallow(<LandingPage />);

describe('Landing page test', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });
  it('contains four child components', () => {
    expect(wrapper.children().length).toEqual(4);
  });
  it('contains the Header child component', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });
  it('contains the Intro child component', () => {
    expect(wrapper.find('Intro').length).toEqual(1);
  });
  it('contains the Footer child component', () => {
    expect(wrapper.find('Footer').length).toEqual(1);
  });
});
