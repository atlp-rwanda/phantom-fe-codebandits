import React from 'react';
import renderer from 'react-test-renderer';
import Burger from '../Burger.js';

describe('Burger Component', () => {
  it('it should render the Burger component', () => {
    const burger = renderer.create(<Burger />).toJSON();
    expect(burger).toMatchSnapshot();
  });
});
