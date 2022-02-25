import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../Card.js';

describe('Card', () => {
  it('should render Card', () => {
    const elem = renderer.create(<Card />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
