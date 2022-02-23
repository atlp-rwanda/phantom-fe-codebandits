/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header.js';

const wrapper = shallow(<Header />);

describe('Header', () => {
  it('contains three sections', () => {
    expect(wrapper.children().length).toEqual(3);
  });
});
