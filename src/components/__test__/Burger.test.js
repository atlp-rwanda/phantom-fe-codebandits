/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Burger from '../Burger.js';

const wrapper = mount(<Burger />);

describe('Burger', () => {
  it('contains one element ', () => {
    expect(wrapper.children().length).toEqual(1);
  });
});
