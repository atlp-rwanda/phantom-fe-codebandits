import React from 'react';
import renderer from 'react-test-renderer';
import Burger from '../Burger.js';

describe('Burger', () => {
  it('should render Burger', () => {
    const elem = renderer.create(<Burger />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
