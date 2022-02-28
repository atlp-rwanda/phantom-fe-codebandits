import React from 'react';
import renderer from 'react-test-renderer';
import WithClickOutside from '../WithClickOutside.js';

const wrapper = <WithClickOutside />;

describe('withClickOutside', () => {
  it('should render withClickOutside', () => {
    const withClickOutside = renderer.create(wrapper).toJSON();
    expect(withClickOutside).toMatchSnapshot();
  });
});
