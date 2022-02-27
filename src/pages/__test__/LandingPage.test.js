import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import LandingPage from '../LandingPage.js';

describe('Landing page test', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });
});

describe('LandingPage', () => {
  it('should render LandingPage', () => {
    const elem = renderer.create(<LandingPage />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
