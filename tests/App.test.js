/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App.js';

const wrapper = shallow(<App />);

describe('App test', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('contains the Footer child component', () => {
    expect(wrapper.find('Footer').length).toEqual(1);
  });
  it('contains the Header child component', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });
});
