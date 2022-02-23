/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Intro from '../Intro.js';

const wrapper = shallow(<Intro />);

describe('Intro', () => {
  it('contains two elements', () => {
    expect(wrapper.children().length).toEqual(2);
  });
});
