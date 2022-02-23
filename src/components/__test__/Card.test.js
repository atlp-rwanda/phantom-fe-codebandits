/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Card from '../Card.js';

const card = {
  title: '1. start',
  text: 'click the start button'
};

describe('Card component', () => {
  it('accepts card props', () => {
    const wrapper = mount(<Card props={card} />);
    expect(wrapper.props().props).toEqual(card);
  });

  it('contains an image', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('has a title', () => {
    const wrapper = mount(<Card title={card.title} />);
    expect(wrapper.find('h3').text()).toEqual('1. start');
  });

  it('has some text', () => {
    const wrapper = mount(<Card text={card.text} />);
    expect(wrapper.find('p').text()).toEqual('click the start button');
  });
});
