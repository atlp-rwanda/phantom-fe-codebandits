import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from '../src/App.js';
import {
  counterReducer,
  decrement,
  increment,
  reset
} from '../src/redux/reducers/counterReducer.js';

const store = configureStore({ reducer: { counter: counterReducer } });

const wrapper = mount(
  <Provider store={store}>
    <App></App>
  </Provider>
);

describe('App test', () => {
  it('It should have a h1 tag with Phantom', () => {
    expect(wrapper.find('h1').text()).toEqual('Phantom');
  });

  it('It should have a p tag with Powered by Codebandits', () => {
    expect(wrapper.find('p').text()).toEqual('Powered by Codebandits');
  });
});

describe('Test App State', () => {
  it('Should display the default state', () => {
    expect(wrapper.find('h3').text()).toBe('0');
  });

  it('Should dispatch Increment action and update state', () => {
    wrapper.find('#increment').simulate('click');
    store.dispatch(increment);
    expect(wrapper.find('h3').text()).toBe('1');
  });

  it('Should dispatch decrement action and update state', () => {
    wrapper.find('#decrement').simulate('click');
    store.dispatch(decrement);
    expect(wrapper.find('h3').text()).toBe('0');
  });

  it('Should dispatch Reset action and update state', () => {
    wrapper.find('#reset').simulate('click');
    store.dispatch(reset);
    expect(wrapper.find('h3').text()).toBe('0');
  });
});
