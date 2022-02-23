/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer.js';

const wrapper = shallow(<Footer />);

describe('Footer', () => {
  it('contains two sections', () => {
    expect(wrapper.children().length).toEqual(2);
  });
});
