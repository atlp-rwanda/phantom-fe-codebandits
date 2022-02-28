import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input.js';

describe('Input', () => {
  it('should render Input', () => {
    const elem = renderer.create(<Input />).toJSON();
    expect(elem).toMatchSnapshot();
  });
});
