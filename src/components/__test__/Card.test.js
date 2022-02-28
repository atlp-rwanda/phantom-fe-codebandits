import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card.js';

describe('Card', () => {
  it('should render the Card component', () => {
    const card = renderer.create(<Card />).toJSON();
    expect(card).toMatchSnapshot();
  });
});
