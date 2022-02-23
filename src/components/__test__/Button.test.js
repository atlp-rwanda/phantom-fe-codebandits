/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Button from '../Button.js';

const button = {
  name: 'Click',
  styles: 'bg-blue-600'
};

describe('Button component', () => {
  it('accepts button props', () => {
    const wrapper = mount(<Button props={button} />);
    expect(wrapper.props().props).toEqual(button);
  });
  it('contains the button type', () => {
    const wrapper = mount(<Button props={button} />);
    expect(wrapper.find('button').type()).toEqual('button');
  });
  it('has a name', () => {
    const wrapper = mount(<Button name={button.name} />);
    expect(wrapper.find('button').text()).toEqual('Click');
  });
  it('has styles', () => {
    const wrapper = mount(<Button styles={button.styles} />);
    expect(wrapper.find('button').props().className).toEqual(
      'bg-blue-600 rounded-xl py-3 px-5'
    );
  });
});
