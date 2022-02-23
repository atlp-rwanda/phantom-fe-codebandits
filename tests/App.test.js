/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from '../src/App.js';
import { counterReducer } from '../src/redux/reducers/counterReducer.js';

const store = configureStore({ reducer: { counter: counterReducer } });

const wrapper = shallow(<App />);

describe('Landing page test', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it('contains the Landing Page child component', () => {
    expect(wrapper.find('LandingPage').length).toEqual(1);
  });
});
