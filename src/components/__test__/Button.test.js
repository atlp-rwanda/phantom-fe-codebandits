import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button.js';

describe('Button', () => {
  it('should render Button', () => {
    const elem = renderer.create(<Button />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
