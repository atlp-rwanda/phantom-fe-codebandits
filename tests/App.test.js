import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App.js';

describe('App test', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
