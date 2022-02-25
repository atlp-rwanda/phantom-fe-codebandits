import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../Intro.js';

describe('Intro', () => {
  it('should render Intro', () => {
    const elem = renderer.create(<Intro />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
